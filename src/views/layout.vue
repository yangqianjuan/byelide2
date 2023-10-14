<template>
  <div>
    <AppLeftPanel />
    <AppEditorRenderer></AppEditorRenderer>
  </div>
</template>

<script lang="ts" setup>
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'
import AppEditorRenderer from '@/components/AppEditorRenderer/AppEditorRenderer.vue'
import { ref } from 'vue'
const type = ref('button')
</script>

<style scoped></style>
