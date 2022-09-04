export const pagesPath = {
  '$404': {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/404' as const }),
  },
  '$500': {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/500' as const }),
  },
  'dashboard': {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/dashboard' as const }),
  },
  'lift': {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/lift' as const }),
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/lift/[id]' as const, query: { id } }),
    }),
  },
  'top': {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/top' as const }),
  },
  'user': {
    $url: (url?: { hash?: string }) => ({ hash: url?.hash, pathname: '/user' as const }),
  },
};

export type PagesPath = typeof pagesPath;
