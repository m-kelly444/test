import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default function ReelRedirectPage({ params }) {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  const ua = headersList.get('user-agent') ?? 'unknown';
  const referer = headersList.get('referer') ?? 'none';
  const time = new Date().toISOString();

  console.log(`[🎯 IG REDIRECT TRAP] Triggered at ${time}`);
  console.log(`→ IP: ${ip}`);
  console.log(`→ UA: ${ua}`);
  console.log(`→ Referer: ${referer}`);

  const { slug } = params;
  const realInstagramURL = `https://www.instagram.com/reel/${slug}/`;

  redirect(realInstagramURL);
}