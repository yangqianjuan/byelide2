<template>
  <div class="app-left-panel-wrapper">
    <div class="app-left-panel-bar">
      <div
        :class="['app-left-panel-item', isDrawerShown === 'outline' && 'active']"
        @click="() => toggleDrawerShown('outline')"
      >
        <Page size="20" :style="{ lineHeight: 0.7 }" />
      </div>
      <div
        :class="['app-left-panel-item', isDrawerShown === 'blocks' && 'active']"
        @click="() => toggleDrawerShown('blocks')"
      >
        <SmartOptimization size="20" :style="{ lineHeight: 0.7 }" />
      </div>
    </div>
    <transition name="app-left-panel-drawer">
      <div v-if="!!isDrawerShown" class="app-left-panel-drawer">
        <div class="app-left-panel-drawer-content">
          <component
            v-if="!!isDrawerShown"
            :is="isDrawerShown === 'outline' ? OutlineDrawer : BlocksDrawer"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { Page, SmartOptimization } from '@icon-park/vue-next'
import { ref } from 'vue'
import BlocksDrawer from './BlocksDrawer.vue'
import OutlineDrawer from './OutlineDrawer.vue'
type drawerMode = 'outline' | 'blocks' | null
const isDrawerShown = ref<drawerMode>('outline')
const toggleDrawerShown = (value: drawerMode) => {
  if (isDrawerShown.value === value) {
    isDrawerShown.value = null
  } else {
    isDrawerShown.value = value
  }
}
</script>

<style scoped>
.app-left-panel-wrapper {
  position: relative;
  display: flex;
  z-index: 4;
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}
.app-left-panel-bar {
  width: 60px;
  height: 100%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-left-panel-item {
  display: flex;
  margin: 8px 0;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
}
.app-left-panel-item.active {
  color: var(--color-text);
  background-color: var(--color-gray-200);
}

.app-left-panel-item:hover {
  background-color: var(--color-gray-200);
  transition: all 0.2s ease-in-out;
}

.app-left-panel-drawer {
  width: calc(var(--panel-width) - 60px);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
  overflow: hidden;
}
</style>
