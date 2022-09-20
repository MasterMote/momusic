<script lang="tsx">
  import { defineComponent } from 'vue'
  import { imgMap } from '@src/assets/icon/imgMap'
  import { musicMenu } from '@src/common/const/menu'

  export default defineComponent({
    setup() {
      return () => (
        <div class="mo-music-menu">
          {musicMenu.map((menu) => {
            return (
              <div class="menu-item flex items-center pl-4">
                <div class="picture mr-2">
                  <img src={imgMap[`${menu.icon}.png`]} />
                </div>
                <div>{menu.name}</div>
              </div>
            )
          })}
        </div>
      )
    },
  })
</script>

<style lang="less">
  .mo-music-menu {
    display: flex;
    flex-direction: column;
    .menu-item {
      width: 100%;
      height: 36px;
      transform: translateX(-10px);
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: #1b1b1b;
      }
      .picture {
        width: 16px;
        height: 16px;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
</style>
