import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authUrl = process.env.NEXT_PUBLIC_AUTH_URL;

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('VERCEL_AUTH_MIDDLEWARE_AUTHORIZED');

  if (cookie === '1') {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/', authUrl));
  }
}

export const config = {
  matcher: '/(.*)',
};
