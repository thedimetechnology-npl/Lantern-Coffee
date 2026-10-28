// Vercel Function equivalent of the Cloudflare Worker's /api/subscribe route
// (src/worker/index.ts), so the email form keeps working on Vercel hosting.
// Wire this to your email provider or a database; it currently just
// acknowledges the address.

type VercelResponse = {
  status(code: number): VercelResponse
  json(body: unknown): unknown
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function handler(
  req: { method?: string; body?: { email?: unknown } },
  res: VercelResponse,
): unknown {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim() : ''
  if (!EMAIL.test(email)) {
    return res.status(400).json({ error: 'Enter a valid email address.' })
  }

  return res.status(200).json({ ok: true })
}