# `BaseLink` Usage

Argument `href` is a completion.

```tsx
// String
<BaseLink href={'/top'}>
  <a>Top Page</a>
</BaseLink>

// UrlObject
<BaseLink href={{ hash: 'example', pathname: '/top' }}>
  <a>Top Page</a>
</BaseLink>

// PagesPath
<BaseLink href={(path) => path.top.$url()}>
  <a>Top Page</a>
</BaseLink>
```
