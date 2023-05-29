import { tw } from 'twind'

import { JobSkeleton } from '@components/job-list/job-skeleton.tsx'

export const JobsSkeleton = () => {
  return (
    <div className={tw`w-full mt-[30px]`}>
      <ul className={tw`list-none p-0 m-0`}>
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
      </ul>
    </div>
  )
}
