import type { NextLinkProps } from '@mantine/next/lib/NextLink';
import Link from 'next/link';
import type { UrlObject } from 'url';

import type { PagesPath } from '@/__generated__/path/$path';
import { pagesPath } from '@/__generated__/path/$path';

// GenerateされたpagesPathからkeyと$url部分の型を抽出
type PagesPathKeysType = keyof PagesPath;
type PagesPathUrlType = ReturnType<PagesPath[PagesPathKeysType]['$url']>;

// UrlObjectの型をpagesPathをもとにカスタム（href, pathnameで補完がでるように）
type UrlObjectType = {
  hash?: PagesPathUrlType['hash'];
  pathname?: PagesPathUrlType['pathname'];
} & Omit<UrlObject, 'pathname' | 'hash'>;

// 動的ページに対応するためpathsPath自体を渡して使用側で自由に指定できるようにする
type BaseLinkHrefType = (path: PagesPath) => UrlObject | string;

type BaseLinkPropsType = {
  href: PagesPathUrlType['pathname'] | UrlObjectType | BaseLinkHrefType;
} & Omit<NextLinkProps, 'href'>;

export const BaseLink = ({ children, href, ...props }: BaseLinkPropsType) => {
  return (
    <Link passHref {...props} href={typeof href === 'function' ? href(pagesPath) : href}>
      {children}
    </Link>
  );
};
