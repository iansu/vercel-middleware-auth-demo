import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('VERCEL_MIDDLEWARE_AUTH_DEMO_AUTHORIZED');
  const authUrl = request.url.includes('localhost')
    ? 'http://localhost:3001/'
    : request.url
        .split('.')
        .map((part, index) => (index === 0 ? 'https://auth' : part))
        .join('.');

  if (cookie === '1') {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL(authUrl));
  }
}

export const config = {
  matcher: '/(.*)',
};
