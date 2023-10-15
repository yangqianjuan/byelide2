<template>
  <div class="quote-setting">
    <div>
      {{ props.blockInfo.type }}
    </div>
    <input type="text" class="content-input" v-bind="content" />

    <input
      type="text"
      class="content-input"
      v-for="field in fields"
      :key="field.key"
      v-model="field.value"
    />
    <button class="add-button" @click="push(new Date().toLocaleTimeString())">add input</button>
    <vue-json-pretty showIcon show-line-number editable :data="blockInfo"> </vue-json-pretty>
  </div>
</template>

<script setup lang="ts">
import { useForm, useFieldArray } from 'vee-validate'
import { watch } from 'vue'
import type { BlockInfo, QuoteBlockInfo } from '@/types/block'
const props = defineProps<{ blockInfo: QuoteBlockInfo }>()

const emit = defineEmits<{ (event: 'change', block: BlockInfo): void }>()

const { values, validate, defineInputBinds } = useForm({
  initialValues: { content: props.blockInfo.props.content }
})

const { fields, push } = useFieldArray('blocks')
const content = defineInputBinds('content')

watch([values], ([newValues]) => {
  emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})
</script>

<style scoped>
.quote-setting {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  font-size: var(--font-size-large);
  border-radius: 8px;

  /* background-color: ; */
}
.content-input {
  width: 100%;

  /* 在做组件库的时候，input 是有一个 size 属性，sm、md、lg */
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}

.add-button {
  margin-top: 6px;
  padding: 4px 12px;
  border-radius: 8px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  cursor: pointer;
}
</style>
