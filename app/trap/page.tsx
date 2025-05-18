import { headers } from 'next/headers';

export default function TrapPage() {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  const ua = headersList.get('user-agent') ?? 'unknown';
  const referer = headersList.get('referer') ?? 'none';
  const time = new Date().toISOString();

  console.log(`[📡 HEY TRAP] /trap accessed at ${time}`);
  console.log(`→ IP: ${ip}`);
  console.log(`→ UA: ${ua}`);
  console.log(`→ Referer: ${referer}`);

  return (
    <html>
      <body>
        <img
          src="/api/log"
          width="1"
          height="1"
          style={{ display: 'none' }}
          alt=""
        />
        <p>✅ HEY Simulation Initialized</p>
      </body>
    </html>
  );
}