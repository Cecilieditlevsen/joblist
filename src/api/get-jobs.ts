import { client } from '@api/client.ts'

import { jobListSchema } from '@modules/job-list/models/job/job.model.ts'

/**
 * Fetch all jobs from the API.
 */
export const getJobs = async () => {
  const response = await client.get('getJobs?category=all').json()

  return jobListSchema.parse(response)
}
