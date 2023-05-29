import { z } from 'zod'

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
})

export const categoryListSchema = z.array(categorySchema)

export type CategoryListModel = z.infer<typeof categoryListSchema>
export type CategoryModel = z.infer<typeof categorySchema>
