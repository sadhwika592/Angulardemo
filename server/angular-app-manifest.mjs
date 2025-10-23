
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular1/home"
  },
  {
    "renderMode": 2,
    "route": "/angular1/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/angular1/careers"
  },
  {
    "renderMode": 2,
    "route": "/angular1/contactus"
  },
  {
    "renderMode": 2,
    "route": "/angular1/users"
  },
  {
    "renderMode": 2,
    "route": "/angular1/products"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29916, hash: '5097147aa095ca691c771f0ce4d7575555e068c959939690956cab5ff6358f97', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17624, hash: '2add99c4dd5051c5cfd5d61fc99db2e877514f1c0c88fdf90f5bb0353be026d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'careers/index.html': {size: 54690, hash: '6499a8e2d48ea3974dfe867d9c9f5b01d3ad46b8125cfa5efeb9f548321374d3', text: () => import('./assets-chunks/careers_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 55777, hash: '4fa52af0c8bda0ee3beb7c09d4aa2df785035cd5ba0a6462615e22eefa0a19d1', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 54621, hash: 'e706f7b3a141511fc96bebcdda96487297daafdf53722ee077ef842f03889e07', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 54611, hash: '24c0c1cd6eeb5e186b58e2e456f415cc9870c67456b1e428eab2bd05a7e7d886', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 54696, hash: 'e4721396afbc8e28496a7676104c1a0ab61644c446ae8ba42c036bf6dfb29b9c', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 54678, hash: '1995cc6ae1293c5026f5fe6774b6b3fcfa7da9b7840753f36f0f48bfdfeac7bf', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-OIMTWSCM.css': {size: 313178, hash: 'c17pMD5wD/k', text: () => import('./assets-chunks/styles-OIMTWSCM_css.mjs').then(m => m.default)}
  },
};
