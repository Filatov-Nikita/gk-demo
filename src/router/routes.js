
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/contacts', component: () => import('pages/ContactsPage.vue') },
      { path: '/sales', component: () => import('pages/SalesPage.vue') },
      { path: '/testimonials', component: () => import('pages/TestimonialsPage.vue') },
      { path: '/sales/:id', component: () => import('pages/SalesShowPage.vue'), name: 'sales.show' },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/buy', component: () => import('pages/BuyPage.vue') },
      { path: '/objects/cottages', component: () => import('pages/ObjectsCottages.vue') },
      { path: '/objects/flats', component: () => import('pages/ObjectsFlats.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
