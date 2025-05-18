import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  const ua = req.headers.get('user-agent') ?? 'unknown';
  const referer = req.headers.get('referer') ?? 'none';
  const time = new Date().toISOString();

  console.log(`[🚨 HEY RED TEAM] Triggered at ${time}`);
  console.log(`→ IP: ${ip}`);
  console.log(`→ UA: ${ua}`);
  console.log(`→ Referer: ${referer}`);

  const transparent = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn8B9n1cyDUAAAAASUVORK5CYII=',
    'base64'
  );

  return new Response(transparent, {
    headers: {
      'Content-Type': 'image/png'
    },
    status: 200
  });
}