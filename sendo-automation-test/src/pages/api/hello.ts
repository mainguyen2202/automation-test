import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { name, message } = request.body

  if (request.method === 'POST') {
    response.status(200).json({ message: 'Hello POST from Next.js!' })
  } else {
    response.status(200).json({ message: 'Hello GET from Next.js!' })
  }
}
