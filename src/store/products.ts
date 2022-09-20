import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Product } from '../types'

export const useProductStore = defineStore('products', () => {
  const products = ref(new Array<Product>())
  const ready = ref(false)
  // test
  function init() {
    products.value.push({ id: 1, name: 'banana', cost: 200 })
    products.value.push({ id: 2, name: 'apple', cost: 300 })
    products.value.push({ id: 3, name: 'orange', cost: 400 })
    ready.value = true
  }

  return {
    products,
    init,
    ready,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
