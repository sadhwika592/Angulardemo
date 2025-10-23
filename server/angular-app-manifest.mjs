
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sadhwika592.github.io/Angulardemo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angulardemo/home"
  },
  {
    "renderMode": 2,
    "route": "/Angulardemo/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/Angulardemo/careers"
  },
  {
    "renderMode": 2,
    "route": "/Angulardemo/contactus"
  },
  {
    "renderMode": 2,
    "route": "/Angulardemo/users"
  },
  {
    "renderMode": 2,
    "route": "/Angulardemo/products"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29948, hash: '56700c7540cabad6ac6a84c3769bcb695943dc2c384abe08933a05db5aa617d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17656, hash: 'a21f6d07a588bb6b51a1b508dbc4e0c48bc659d22dfe4b7e4af3202f5610870e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 54838, hash: '2072eb8edbd70a7ad9726b254d34eb64ec7255b814acc0be2482d0a569408ce9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 54781, hash: '6443530bf2739887bdb51627117f4b540ae8950fd01e89f1b8c05417762516a0', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 55969, hash: '4870aeea165917586e1d58cd5a609ecd9a57da22f51a98ead858860573c6204a', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'careers/index.html': {size: 54850, hash: '00054c58fc175e8e516515c87a977af4ccf0f79305fd4514a2b2b05a7a53219f', text: () => import('./assets-chunks/careers_index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 54771, hash: 'c9f8d318ab0c4a42a7d265f92da770bb8495755af57e0724351a235275367f7f', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 54856, hash: 'af000a4a8b3eb5434a85ff76242ccc95535d890533143099877e629014c7b93d', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'styles-OIMTWSCM.css': {size: 313178, hash: 'c17pMD5wD/k', text: () => import('./assets-chunks/styles-OIMTWSCM_css.mjs').then(m => m.default)}
  },
};
