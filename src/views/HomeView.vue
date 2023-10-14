<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigator from '@/components/AppNavigator.vue'
</script>

<template>
  <header>
    <AppNavigator msg="hello" />
  </header>
  <main>
    <RouterView />
  </main>
</template>
