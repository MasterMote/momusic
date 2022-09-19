<template>
  <div class="mo-layout">
    <ElContainer>
      <ElHeader class="mo-header-container">ElHeader</ElHeader>
      <ElContainer :style="containerHeight">
        <ElAside class="mo-aside-container">ElAside</ElAside>
        <ElMain class="mo-main-container">ElMain</ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  const headerHeight = 55
  const containerHeight = computed(() => {
    return `height: ${window.innerHeight - headerHeight}px`
  })
</script>

<style lang="less">
  .mo-layout {
    .mo-header-container {
      height: @header-height;
    }
    .mo-aside-container {
      width: @aside-width;
    }
  }
</style>
