import { z } from 'zod'

export const jobSchema = z.object({
  type: z.string(),
  id: z.string(),
  navn: z.string(),
  stilling: z.string(),
  downloadUrl: z.string(),
})

export const jobListSchema = z.object({
  jobs: z.array(jobSchema),
})

export type JobModel = z.infer<typeof jobSchema>
export type JobsModel = z.infer<typeof jobListSchema>
