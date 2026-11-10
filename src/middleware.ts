import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Checks if the request origin is allowed:
 * - https://aiwa.vmcmedia.in
 * - https://vmcmedia.in
 * - https://www.vmcmedia.in
 * - Any *.vmcmedia.in subdomain
 * - Local development (localhost)
 */
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  const vmcPattern = /^https?:\/\/([a-zA-Z0-9-]+\.)?vmcmedia\.in$/;
  const localPattern = /^http:\/\/localhost(:\d+)?$/;
  return vmcPattern.test(origin) || localPattern.test(origin);
}

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin');

  // Handle all API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    const isAllowed = isAllowedOrigin(origin);
    const allowOrigin = isAllowed && origin ? origin : 'https://www.vmcmedia.in';

    // Handle preflight OPTIONS request
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': isAllowed ? origin! : '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin, X-Api-Key',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const response = NextResponse.next();
    if (isAllowed && origin) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, X-Api-Key');
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
