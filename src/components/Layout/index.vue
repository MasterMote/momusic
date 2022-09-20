<template>
  <div class="mo-layout">
    <ElContainer>
      <ElHeader class="mo-header-container">
        <HeaderNav />
      </ElHeader>
      <ElContainer :style="containerHeight">
        <ElAside class="mo-aside-container">
          <AsideNav />
        </ElAside>
        <ElMain class="mo-main-container">
          <router-view></router-view>
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import HeaderNav from '@src/components/HeaderNav/index.vue'
  import AsideNav from '@src/components/AsideNav/index.vue'

  const headerHeight = 50
  const containerHeight = computed(() => {
    return `height: ${window.innerHeight - headerHeight}px`
  })
</script>

<style lang="less">
  .mo-layout {
    min-height: 700px;
    min-width: 1000px;

    .mo-header-container {
      height: @header-height;
    }
    .mo-aside-container {
      width: @aside-width;
    }
  }
</style>
