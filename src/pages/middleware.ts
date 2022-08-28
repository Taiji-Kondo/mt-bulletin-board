import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// example
const DENIED_PATH = ['/dashboard'];

export function middleware(request: NextRequest) {
  console.log('middleware', request);

  const url = request.url;
  // example
  // 管理者か判定
  const isAdmin = false;

  if (DENIED_PATH.includes(url)) {
    if (isAdmin) return NextResponse.next();

    return NextResponse.redirect('/', { status: 404 });
  }
}

/**
 * middlewareの実行パスを指定
 *
 * @see https://nextjs.org/docs/advanced-features/middleware#matcher
 **/
export const config = {
  matcher: ['/dashboard/:path*'],
};
