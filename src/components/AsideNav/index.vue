<template>
  <div class="mo-aside-nav">
    <div class="mo-my-info">
      <div class="mo-head-sculpture">
        <img src="/touxiang.png" />
      </div>
      <div class="mo-user-name ml-1.5"> PersevserseM </div>
      <ElIcon class="ml-1 flex-shrink-0" style="color: #5c5c5c"><CaretRight /></ElIcon>
    </div>
    <MusicMenu />
  </div>
</template>

<script lang="ts" setup>
  import MusicMenu from './MusicMenu.vue'
</script>

<style lang="less">
  .mo-aside-nav {
    padding: 10px;
    color: @aside-text-color;

    .mo-my-info {
      height: 44px;
      display: flex;
      align-items: center;

      .mo-head-sculpture {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        flex-basis: 40px;
        flex-shrink: 0;

        img {
          max-width: 100%;
          min-height: 100%;
        }
      }

      .mo-user-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex-shrink: 1;
      }
    }
  }
</style>
