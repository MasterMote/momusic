import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import genPostcssPlugins from './viteconfig/postcss.vite'
import alias from './viteconfig/alias.vite'

export default async ({ command, isProxy = true }) => {
  const isBuild: boolean = command === 'build'
  return {
    plugins: [
      Vue(),
      VueJsx()
    ],
    server: {
      host: '127.0.0.1',
      port: 5180,
      proxy: {
        '/api': {
          target: 'http://127.0.0.33:4000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    },
    base: './',
    resolve: { alias },
    css: {
      postcss: {
        plugins: genPostcssPlugins(isBuild),
      },
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve(process.cwd(), './thecss/var/index.less')}"`,
          },
          javascriptEnabled: true,
        },
      },
    },
  }
}
