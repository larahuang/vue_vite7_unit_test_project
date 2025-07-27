/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

//型別設置
interface vitestConfigType {
 include: string[],
  globals: boolean,
  environment: string,
  exclude:string[],
  coverage: object,
}
//定義vitestConfig
const vitestConfig: vitestConfigType = {
   //默认值: ['**/*.{test,spec}-d.?(c|m)[jt]s?(x)']
   // 在這裡加入測試設定：.spec.js類型都執行單元測試
  include:['**/*.spec.js'],
  globals: true,//全域:就不需要顯示引入 vitest 測試相關的 API，讓測試看起來更乾淨
  environment: "jsdom",
   //匹配排除测试文件，以下是預設
 exclude:['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**'],
  coverage: {
    all: true,
    //默認v8
    provider: 'v8',
    reporter: ['text', 'json', 'html'],
    include: ['src/**.{vue,ts}'],
    //排除
    exclude: ['**/utils/users.ts']
  }
};


export default defineConfig({
  plugins: [
    vue()
  ],
  //引入定義
  test:vitestConfig,
})
