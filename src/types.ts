import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void
interface Product {
  id: number
  name: string
  cost: number
}

export { Product }
