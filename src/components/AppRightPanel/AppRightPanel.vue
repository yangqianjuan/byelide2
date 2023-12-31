<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header">
        {{ blocksBaseMeta[currentBlockInfo.type].name }}
      </div>
      <div class="app-right-panel-content">
        <component
          :is="blockSetting"
          :blockInfo="currentBlockInfo"
          @change="(block: BlockInfo) => appEditorStore.updateBlock(block.id, block)"
        >
        </component>
        <SchemaExport :currentBlockInfo="currentBlockInfo"></SchemaExport>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import 'vue-json-pretty/lib/styles.css'
import { computed } from 'vue'

import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { useAppEditorStore } from '@/stores/appEditor'
import type { BlockInfo } from '@/types/block'

import ChartSetting from './ChartSetting.vue'
import QuoteSetting from './QuoteSetting.vue'
import SchemaExport from './SchemaExport.vue'

const appEditorStore = useAppEditorStore()

const blocksMap = computed(() => {
  const { blocks } = appEditorStore
  // console.log(blocks)
  return blocks.reduce<Record<string, (typeof blocks)[0]>>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
})
// console.log(blocksMap)

const currentBlockInfo = computed(() => {
  if (!appEditorStore.currentBlockId) return null
  return blocksMap.value[appEditorStore.currentBlockId]
})

const blockSetting = computed(() => {
  switch (currentBlockInfo?.value?.type) {
    case 'quote':
      return QuoteSetting
    case 'chart':
      return ChartSetting
    default:
      return ''
  }
})
</script>

<style scoped>
.app-right-panel-wrapper {
  position: relative;
  z-index: 4;
  width: var(--panel-width);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-right-panel-header {
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bolder);
  height: 44px;
  line-height: 44px;
  padding: 0 16px 0 20px;
}

.app-right-panel-content {
  padding: 0 16px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
