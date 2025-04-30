<template>
  <div>
    <h1>Hi {{ username }}</h1>
    <RemoteProductCard />
    <RemoteCart />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { username } = storeToRefs(userStore);

const RemoteProductCard = defineAsyncComponent(() => import('productCardApp/ProductCard.vue'));
const RemoteCart = defineAsyncComponent(() => import('cartApp/Cart.vue'))
</script>
