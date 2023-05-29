import ky from 'ky'

/**
 * The client for the Kommuneplatformen JobList API to Frederiksberg Kommune.
 */
export const client = ky.create({
  prefixUrl: 'https://frbjob.kommuneplatformen.dk/Job',
  headers: {
    accept: 'text/plain',
  },
})
