<script setup lang="ts">
import { useProductStore } from '~/store/products'

const props = defineProps({
  productid: Number,
})

const store = useProductStore()
const products = store.products
const product = products.find((prod) => {
  return prod.id === props.productid
})

const productname = typeof product === 'undefined' ? '' : product.name
</script>

<template>
  <p>Product Name: {{ productname }}</p>
</template>
