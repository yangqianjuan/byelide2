<template>
  <div class="ds-wrapper">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
.ds-wrapper {
  display: flex;
  height: 100%;
}
</style>
