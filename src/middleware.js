import { NextResponse } from 'next/server';

export default function middleware(request) {
  const response = NextResponse.next();
  const currentSession = request.cookies.get('token');

  if (request.nextUrl.pathname === '/') {
    if (!currentSession) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (request.nextUrl.pathname === '/login') {
    if (currentSession) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return response;
}
