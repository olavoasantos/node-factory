export const imports = {
  'src/docs/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-index" */ 'src/docs/index.mdx'),
  'src/docs/api/0-factory.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-api-0-factory" */ 'src/docs/api/0-factory.mdx'),
  'src/docs/api/1-create.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-api-1-create" */ 'src/docs/api/1-create.mdx'),
  'src/docs/api/2-only.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-api-2-only" */ 'src/docs/api/2-only.mdx'),
  'src/docs/api/3-make.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-api-3-make" */ 'src/docs/api/3-make.mdx'),
  'src/docs/api/4-seed.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-api-4-seed" */ 'src/docs/api/4-seed.mdx'),
  'src/docs/api/5-types.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-api-5-types" */ 'src/docs/api/5-types.mdx'),
  'src/docs/observations/updateFromV012.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docs-observations-update-from-v012" */ 'src/docs/observations/updateFromV012.mdx'),
}
