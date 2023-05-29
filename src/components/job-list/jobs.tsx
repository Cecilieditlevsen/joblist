import clsx from 'clsx'
import { tw } from 'twind'

import { Job } from '@components/job-list/job.tsx'
import { JobsSkeleton } from '@components/job-list/jobs-skeleton.tsx'
import {
  useJobListSearchValue,
  useThemeValue,
} from '@components/job-list/store.ts'

import { useFilteredJobs } from '@hooks/use-filtered-jobs.ts'
import { useJobs } from '@hooks/use-jobs.ts'
import { useSearchedJobs } from '@hooks/use-searched-jobs.ts'

export const Jobs = () => {
  const jobsQuery = useJobs()
  const filteredJobs = useFilteredJobs()
  const searchedJobs = useSearchedJobs()
  const searchValue = useJobListSearchValue()
  const theme = useThemeValue()

  const isDarkMode = theme === 'dark'

  const jobs = searchValue ? searchedJobs.map((job) => job.item) : filteredJobs

  if (jobsQuery.data) {
    return (
      <div className={tw`w-full mt-[30px]`}>
        <ul className={tw`list-none p-0 m-0`}>
          {jobs.map((job) => (
            <li
              key={job.id}
              className={clsx(
                [
                  tw`w-full first:border-none border-1 border-t-solid m-0  transition-all duration-300`,
                ],
                {
                  [tw`hover:bg-dark-500`]: isDarkMode,
                  [tw`hover:bg-[#EDF4E7]`]: !isDarkMode,
                }
              )}
            >
              <Job
                title={job.navn}
                id={job.id}
                category={job.type}
                downloadUrl={`https://frbjob.kommuneplatformen.dk/${job.downloadUrl}`}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (jobsQuery.isLoading) {
    return <JobsSkeleton />
  }

  return <p>Could not find any jobs...</p>
}
