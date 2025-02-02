'use client';
import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://dsrn.pockethost.io');

// src/middleware.js
import { NextResponse } from 'next/server';

export async function middleware(request) {
  // Get the token from cookies
  const token = request.cookies.get('pb_auth')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};