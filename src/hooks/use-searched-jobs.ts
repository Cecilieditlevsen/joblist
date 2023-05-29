import Fuse from 'fuse.js'

import type { JobModel } from '@modules/job-list/models/job/job.model.ts'

import { useJobListSearchValue } from '@components/job-list/store.ts'

import { useFilteredJobs } from '@hooks/use-filtered-jobs.ts'

const filterJobs = (jobs: JobModel[], searchValue: string) => {
  const options = {
    isCaseSensitive: false,
    shouldSort: true,
    threshold: 0.3,
    keys: ['navn', 'id'],
  } satisfies Fuse.IFuseOptions<JobModel>

  const fuse = new Fuse(jobs, options)
  return fuse.search(searchValue)
}

export const useSearchedJobs = () => {
  const searchValue = useJobListSearchValue()
  const filteredJobs = useFilteredJobs()

  return filterJobs(filteredJobs, searchValue)
}
