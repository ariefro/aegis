import { NextResponse } from 'next/server';

export default function middleware(request) {
  const response = NextResponse.next();
  const currentSession = request.cookies.get('aegis_token');
  const reqUrlIncludes = (url) => request.nextUrl.pathname.startsWith(url);

  if (reqUrlIncludes('/login') || reqUrlIncludes('/register')) {
    if (currentSession) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
  }

  if (
    request.nextUrl.pathname === '/' ||
    reqUrlIncludes('/detail') ||
    reqUrlIncludes('/home') ||
    reqUrlIncludes('/notification') ||
    reqUrlIncludes('/setting') ||
    reqUrlIncludes('/stats') ||
    reqUrlIncludes('/transaction') ||
    reqUrlIncludes('/create')
  ) {
    if (!currentSession) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return response;
}
