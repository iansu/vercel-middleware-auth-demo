import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('VERCEL_MIDDLEWARE_AUTH_DEMO_AUTHORIZED');
  const dashboardUrl = request.url.includes('localhost')
    ? 'http://localhost:3000/'
    : request.url
        .split('.')
        .map((part, index) => (index === 0 ? 'https://dashboard' : part))
        .join('.');

  if (cookie === '1') {
    return NextResponse.redirect(new URL(dashboardUrl));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/(.*)',
};
