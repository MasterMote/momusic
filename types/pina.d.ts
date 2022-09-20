import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsInPlugin<_S, Store> {
    // 使某个 Action 防抖
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>
  }
}
