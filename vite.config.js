import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import copy from 'rollup-plugin-copy'
import node_resolve from '@rollup/plugin-node-resolve';
import virtual from '@rollup/plugin-virtual';
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    conditions: ['source'],
    mainFields: ['module','main']
  },
  server: {
    hmr: {
      port: 3000
    }
  },
  base: '/vue-apps/',
  build: {
    minify: false,
    outDir: "docs",
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        index1: resolve(__dirname, 'src/apps/HubsTest1/index.html'),
        index2: resolve(__dirname, 'src/apps/HubsTest2/index.html'),
        index3: resolve(__dirname, 'src/apps/Center_Map/index.html'),
        hubs: resolve(__dirname, 'hubs.ts')
      },
    //   external: ['three'],
    //   globals: {
    //     'three': 'THREE'
    //   },
  
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        format: 'es'
      }, 
      plugins: [
        // virtual({
        //     three: `export default THREE`
        //   }),
        typescript({
            typescript: require('typescript'),
        }),
         
          node_resolve(),
      ]
    }
  },
  plugins: [vue({
    css: {
        loaderOptions: {
          css: {
            localIdentName: '[local][HubsVue][hash:base64:8]'
          }
        }
      }
    }
  )],

})