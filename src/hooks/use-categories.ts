import { getCategories } from '@api/get-categories.ts'
import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

export const useCategories = () => {
  return useQuery(['categories'], getCategories, {
    staleTime: ms('5m'),
  })
}
