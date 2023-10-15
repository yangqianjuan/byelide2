<template>
  <div class="layout-wrapper">
    <AppLeftPanel />
    <AppEditorRenderer></AppEditorRenderer>
    <AppRightPanel></AppRightPanel>
  </div>
</template>

<script lang="ts" setup>
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'
import AppEditorRenderer from '@/components/AppEditorRenderer/AppEditorRenderer.vue'
import AppRightPanel from '@/components/AppRightPanel/AppRightPanel.vue'
import { ref } from 'vue'
const type = ref('button')
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  height: 100%;
}

.layout-setting {
  position: relative;
  z-index: 6;
  width: var(--panel-width);
  box-shadow: var(--color-gray-300) -1px 0 0;
}
</style>
