<script setup>
import Header from '@/components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <main class="flex-shrink-0">
    <div class="container mt-5 p-4">
      <RouterView />
    </div>
  </main>
</template>