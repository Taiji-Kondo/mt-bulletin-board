## `BaseLink` Usage

This component argument `href` is a completion by generated `pagesPath` constant.

```tsx
// String
<BaseLink href={'/top'}>
  <Button component={'a'}>Top Page</Button>
</BaseLink>

// UrlObject
<BaseLink href={{ hash: 'example', pathname: '/top' }}>
  <Button component={'a'}>Top Page</Button>
</BaseLink>

// PagesPath
<BaseLink href={(path) => path.top.$url()}>
  <Button component={'a'}>Top Page</Button>
</BaseLink>
```

## `BaseExternalLink` Usage

This component argument `href` is a completion by `EXTERNAL_LINK` constant.

```tsx
<BaseExternalLink href={'https://www.google.com/'}>Google</BaseExternalLink>
```

## Learn More

https://mantine.dev/guides/next/#nextlink-component
