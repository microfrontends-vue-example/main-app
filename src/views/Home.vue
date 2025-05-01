<template>
  <div class="home-page">
    <h1>Hi {{ username }}</h1>
    <div class="home-page-body">
      <div class="products">
        <h2>Products</h2>
        <div class="products-list">
          <RemoteProductCard
            v-for="(product, index) in productsForShow"
            :key="index"
            :product="product"
            class="product-card"
          />
        </div>
      </div>
      <div class="cart">
        <h2>Cart</h2>
        <RemoteCart/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from "pinia";
import {useProductsStore} from "../stores/productsStore";

const userStore = useUserStore();
const { username } = storeToRefs(userStore);
const { products } = storeToRefs(useProductsStore());

const RemoteProductCard = defineAsyncComponent(() => import('productCardApp/ProductCard.vue'));
const RemoteCart = defineAsyncComponent(() => import('cartApp/Cart.vue'))

const productsForShow = computed(() => products.value.filter(product => product.showItem))
</script>

<style scoped>
.home-page {
  padding: 1rem 2rem;
}
.home-page-body, .products-list{
  display: flex;
  gap: 2rem;
}

.products {
  width: 75%;
}

.cart {
  width: 25%;
}

.product-card {
  width: 32%;
}
</style>
