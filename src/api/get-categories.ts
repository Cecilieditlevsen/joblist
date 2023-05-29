import { client } from '@api/client.ts'

import { categoryListSchema } from '@modules/job-list/models/category/category.model.ts'

/**
 * Fetch all categories from the API.
 */
export const getCategories = async () => {
  const response = await client.get('getCategories').json()

  return categoryListSchema.parse(response)
}
