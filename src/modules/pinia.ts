import { createPinia } from 'pinia'
import { useProductStore } from '../store/products'
import { type UserModule } from '~/types'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ router, isClient, initialState, app, onSSRAppRendered }) => {
  const pinia = createPinia()
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient) { pinia.state.value = (initialState.pinia) || {} }

  else {
    onSSRAppRendered(() => {
      initialState.pinia = pinia.state.value
    })
  }
  router.beforeEach((to, from, next) => {
    const store = useProductStore(pinia)
    if (!store.ready)
      // perform the (user-implemented) store action to fill the store's state
      store.init()
    next()
  })
}
