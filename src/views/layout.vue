<template>
  <div>
    <AppLeftPanel />
  </div>
</template>

<script lang="ts" setup>
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'
import { ref } from 'vue'
const type = ref('button')
</script>

<style scoped></style>
