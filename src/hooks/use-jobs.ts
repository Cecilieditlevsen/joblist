import { getJobs } from '@api/get-jobs.ts'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

export const useJobs = () => {
  return useQuery(['jobs'], getJobs, {
    staleTime: ms('5m'),
  })
}
