export const imports = {
  'docs/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.mdx'),
  'docs/api/0-factory.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-api-0-factory" */ 'docs/api/0-factory.mdx'),
  'docs/api/1-create.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-api-1-create" */ 'docs/api/1-create.mdx'),
  'docs/api/2-only.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-api-2-only" */ 'docs/api/2-only.mdx'),
  'docs/api/3-make.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-api-3-make" */ 'docs/api/3-make.mdx'),
  'docs/api/4-seed.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-api-4-seed" */ 'docs/api/4-seed.mdx'),
  'docs/api/5-types.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-api-5-types" */ 'docs/api/5-types.mdx'),
  'docs/observations/updateFromV012.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-observations-update-from-v012" */ 'docs/observations/updateFromV012.mdx'),
}
