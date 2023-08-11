import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // command 变量其实就可以判断当前的环境变量如： 本地运行是server 还是打包是build
  const env = loadEnv(mode, process.cwd());
  return {
    // base: "./",
    // base: "/demo/",
    // base: env.VITE_PUBLIC_PATH, // 解决项目部署服务器二级目录问题（如果你是顶级域名部署 这些可不用做）
    plugins: [
      // vue(),
      vue({
        reactivityTransform: true, //$ref
      }),
      DefineOptions(),
    ],
    envDir: "env", //或"./env",用于加载 .env 文件的目录
    server: {
      port: 5325,
      // host: "",
      proxy: {
        // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
        // 正则表达式写法
        "^/test1": {
          target: "https://zs.ctune.cn:10007", // 后端服务实际地址
          changeOrigin: true, //开启代理
          rewrite: (path) => path.replace(/^\/test1/, ""),
        },
        "^/test2": {
          target: "http://127.0.0.1:8080/", // 后端服务实际地址
          changeOrigin: true, //开启代理`
          rewrite: (path) => path.replace(/^\/test2/, ""),
        },
      },
    },
    build: {
      // assetsInlineLimit: 4096, //4kb,
      // sourcemap: true,//构建后是否生成 source map 文件(方便调试)
    },
    resolve: {
      // 配置路由别名
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    //解决process is not defined报错
    // define: {
    //   "process.env": {},
    // },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/theme.scss";`, //设置全局变量（字号、颜色）
        },
      },
    },
  };
});
