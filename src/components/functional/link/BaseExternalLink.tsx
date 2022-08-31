import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';

export const EXTERNAL_LINK = {
  google: {
    href: 'https://www.google.com/',
    title: 'Google',
  },
  mantine: {
    href: 'https://mantine.dev/',
    title: 'Mantine',
  },
  nextjs: {
    href: 'https://nextjs.org/',
    title: 'Next.js',
  },
} as const;

type ExternalLinkType = typeof EXTERNAL_LINK;
export type ExternalLinkKeysType = keyof ExternalLinkType;

type BaseExternalLinkPropsType<T extends ExternalLinkKeysType> = {
  href: ExternalLinkType[T]['href'];
} & Omit<ButtonProps, 'href'>;

export const BaseExternalLink = <T extends ExternalLinkKeysType>({
  children,
  href,
  ...props
}: BaseExternalLinkPropsType<T>) => {
  return (
    <Button component={'a'} href={href} target={'_blank'} variant={'subtle'} {...props}>
      {children}
    </Button>
  );
};
