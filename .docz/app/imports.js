export const imports = {
  'docs/src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-src-index" */ 'docs/src/index.mdx'),
  'docs/src/api/0-factory.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-src-api-0-factory" */ 'docs/src/api/0-factory.mdx'),
  'docs/src/api/1-create.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-src-api-1-create" */ 'docs/src/api/1-create.mdx'),
  'docs/src/api/2-only.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-src-api-2-only" */ 'docs/src/api/2-only.mdx'),
  'docs/src/api/3-make.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-src-api-3-make" */ 'docs/src/api/3-make.mdx'),
  'docs/src/api/4-seed.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-src-api-4-seed" */ 'docs/src/api/4-seed.mdx'),
  'docs/src/api/5-types.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-src-api-5-types" */ 'docs/src/api/5-types.mdx'),
  'docs/src/observations/updateFromV012.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-src-observations-update-from-v012" */ 'docs/src/observations/updateFromV012.mdx'),
}
