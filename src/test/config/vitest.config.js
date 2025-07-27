import vue from '@vitejs/plugin-vue'
// 單元測試設置 vitestConfig
const vitestConfig = {
  test: {
    globals: true,//全域:就不需要顯示引入 vitest 測試相關的 API，讓測試看起來更乾淨
    environment: "jsdom",
    coverage:{
      all:true,
      provide:'v8',//已經安裝
      reporter:['text','json','html']
    }
  },
}

export default defineConfig({
    plugins: [
        vue(),
    ],
    // 單元測試設置
    test: vitestConfig.test,
})