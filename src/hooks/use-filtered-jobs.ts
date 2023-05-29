import type { JobModel } from '@modules/job-list/models/job/job.model.ts'

import { useJobListFilters } from '@components/job-list/store.ts'

import { useJobs } from '@hooks/use-jobs.ts'

const filterJobs = (jobs: JobModel[], filter: string) => {
  if (filter === 'all') return jobs

  return jobs.filter((job) => job.type === filter)
}

export const useFilteredJobs = () => {
  const jobsQuery = useJobs()
  const filter = useJobListFilters()

  const jobs = jobsQuery.data?.jobs ?? []

  return filterJobs(jobs, filter)
}
