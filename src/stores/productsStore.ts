import { defineStore } from "pinia";
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      title: 'Vue Logo T-Shirt 1',
      id: 1,
      img: 'https://ae04.alicdn.com/kf/S393937ac48cc42e6841518b3c4d21e2d7.jpg_480x480.jpg',
      price: 50,
      showItem: true
    },
    {
      title: 'Vue Logo T-Shirt 2',
      id: 2,
      img: 'https://ae04.alicdn.com/kf/Se3052906f6974307890c120e347840b2Q.jpg_480x480.jpg',
      price: 30,
      showItem: true
    },
    {
      title: 'Vue Logo T-Shirt 3',
      id: 3,
      img: 'https://ae04.alicdn.com/kf/S1726b06ce309437ba23d2c951fa25f49W.jpg_480x480.jpg',
      price: 40,
      showItem: true
    }
  ])

  const changeProductShowing = (productId: number) => {
    products.value.forEach(product => {
      if (product.id === productId) {
        product.showItem = !product.showItem
      }
    });
  }

  return {
    changeProductShowing,
    products
  }
});