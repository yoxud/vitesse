import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)

export async function includedRoutes(paths, routes) {
  // Sensitive key is managed by Vite - this would not be available inside
  // vite.config.js as it runs before the environment has been populated.
  // const apiClient = new MyApiClient(import.meta.env.MY_API_KEY)

  // return Promise.all(
  // routes.flatMap(async (route) => {
  //   return route.name === 'Blog'
  //     ? (await apiClient.fetchBlogSlugs()).map(slug => `/blog/${slug}`)
  //     : route.path
  // }),
  //  routes = [...routes, 2, 3],
  // )
  const p = [...paths.filter(path => !path.includes(':')), '/1', '/2']
  console.log(p)
  return p
}
