import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL;

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('VERCEL_AUTH_MIDDLEWARE_AUTHORIZED');

  if (cookie === '1') {
    return NextResponse.redirect(new URL('/', dashboardUrl));
  }
}

export const config = {
  matcher: '/(.*)',
};
