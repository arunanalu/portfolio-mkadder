// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const token = process.env.NEXT_PUBLIC_API_TOKEN
  try {
    let data = await fetch(`${url}/api/photos/?limit=${req.body.limit}&offset=${req.body.offset}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Space-App-Key': token,
      }
    })
    data = await data.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
}
