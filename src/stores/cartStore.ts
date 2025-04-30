import { defineStore } from 'pinia'
import { ref } from 'vue'

interface CartItem {
  id: string
  title: string
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  function addItem(product: { id: string, title: string }) {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ id: product.id, title: product.title, quantity: 1 })
    }
  }

  function removeItem(productId: string) {
    items.value = items.value.filter(item => item.id !== productId)
  }

  function increaseQuantity(productId: string) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity++
    }
  }

  function decreaseQuantity(productId: string) {
    const item = items.value.find(item => item.id === productId)
    if (item && item.quantity > 1) {
      item.quantity--
    } else if (item) {
      removeItem(productId)
    }
  }

  // === Return API ===
  return {
    items,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity
  }
})