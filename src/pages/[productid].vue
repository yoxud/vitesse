<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/store/products'

const props = defineProps({
  productid: String,
})
let id: Number
if (props.productid !== undefined)
  id = parseInt(props.productid)
const store = useProductStore()
const { products } = storeToRefs(store)
const product = products.value.find((prod) => {
  return prod.id === id
})
const productname = product === undefined ? '' : product.name
</script>

<template>
  <p>Product Name: {{ productname }} </p>
</template>
