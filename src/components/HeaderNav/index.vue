<template>
  <div class="mo-header-nav">
    <div class="mo-go-back">
      <div class="mo-icons-container">
        <ElIcon class="mr-4"><ArrowLeft /></ElIcon>
        <ElIcon class="disabled"><ArrowRight /></ElIcon>
      </div>
    </div>
    <div class="mo-tab">
      <component :is="navComponent"></component>
    </div>
    <div class="mo-mine">
      <ElIcon class="mr-4"><Message /></ElIcon>
      <ElIcon class="mr-4"><Setting /></ElIcon>
      <ElInput
        v-model="searchRef"
        class="mr-4"
        placeholder="告五人"
        size="small"
        style="width: 200px"
        clearable
      >
        <template #prefix>
          <ElIcon class="el-input__icon"><Search /></ElIcon>
        </template>
      </ElInput>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { headerNavMap } from '@src/common/map/headerNav.map'

  const router = useRouter()
  const navComponent = ref(null)
  watch(
    () => router.currentRoute.value.path,
    (newValue) => {
      console.log('watch', newValue)
      const key = newValue.replace('/', '')
      navComponent.value = key ? headerNavMap[key] : null
    },
    { immediate: true },
  )

  const searchRef = ref<string>('')
</script>

<style lang="less">
  .mo-header-nav {
    display: flex;
    height: 100%;
    .el-icon {
      cursor: pointer;

      &:hover {
        color: @basic-active-color;
      }
    }

    .mo-go-back {
      width: @aside-width;
      flex-basis: @aside-width;
      height: 100%;
      display: flex;
      flex-direction: row-reverse;
      position: relative;
      background-color: @go-back-bg;
      color: @aside-text-color;

      .mo-icons-container {
        position: absolute;
        bottom: 12px;
      }

      .disabled {
        color: #4b4b4b;
      }
    }

    .mo-tab {
      height: 100%;
      max-width: 60%;
      min-width: 50%;
    }

    .mo-mine {
      height: 100%;
      display: flex;
      flex-direction: row-reverse;
      flex-grow: 1;
      align-items: center;
      color: @aside-text-color;

      .el-icon:hover {
        color: @basic-active-color;
      }

      .el-input__wrapper {
        background-color: #4b4b4b;
        box-shadow: none;
        border-radius: 20px;

        &.is-focus {
          box-shadow: 0 0 0 1px @basic-active-color inset;
        }
      }
    }
  }
</style>
