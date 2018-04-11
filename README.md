# perhelp

> 自由工作者平台

## 启动

``` bash
# 安装依赖
yarn install
# 启动项目
npm run dev
# 线上代码打包
npm run build
# build for production and view the bundle analyzer report
npm run build --report
# run unit tests
npm run unit
# run all tests
npm test
```

## Graphql使用教程
参考demo --- `@/views/hello-world`
Graphql配置地址：https://console.graph.cool/hello-world/schema/types
使用教程：https://github.com/Akryum/vue-apollo#installation

```
# Run this mutation in the Graphcool Playground to authenticate a user
mutation {
  authenticateUser(
    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UUXpRa0ZFTlVNM09EVTJPRGM1UmpFd01UbERNREE0UWpBd1FrVTBNamcwTnpaRE1FSkRPQSJ9.eyJpc3MiOiJodHRwczovL2FuZHlsaXdyLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YWNiODNlYTkxYzQ1MTA3Y2U3YzcyMjQiLCJhdWQiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaHR0cHM6Ly9hbmR5bGl3ci5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTIzMjg3MDI2LCJleHAiOjE1MjMyOTQyMjYsImF6cCI6IkY2MXVoV2Fjb3YwNEVqajJDSHRCVEgxbktzSU9pY3JiIiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.VuhIrdJe-Ut7v1lzEodyyqg6qbAljmdxVDSEZK-OBD-dpS8nsXxGwAPblAFrspCJcLjOwELpXO1uHEmhpx4lo_ioaU3My08hpzQQF4pOmzajiJYMQOpBs0Exz_WgzJrNInDhLiqGX26y7qt0fO0lm_N-0ubrf7e3pUGHXhIaFwD6q4y4yGOlW6eSKJop9-P50O9Qtq1oBcTPq2LX2SoJA1tDkE41wkxcqz7_ABg8Lin5-r-nxhbqUJt99v2OZQUOF5g58b7uWTtoE69vPjRUTyfgbmj6r3KMmCyVUQjz_CAbNVcRzxiVr3-prNmxBOBq4SYoWZWhb8oNTYGeSKs6sw"
  ) {
    id
    token
  }
}
```

> 开发使用的 资源

### [Icon 库](https://fontawesome.com/icons)

```

<icon name="times" > 

name: 取 fa-后面的名称 

```

### [图片占位符-在线生成图片](https://tool.lu/imageholder/)

> vue-js-modal

```

模态弹窗

<modal classes="mangment v--modal" :pivotX="1" name="ManagMent" transition="pop-out" width="42%" height="100%" @before-open="beforeOpen" >

pivotx : 0-左 0.5中 1 右 【表示 窗口出现的位置】

@before-open : 打开前的生命周期事件，用于传参 ，参数被保存在 e.params 中。

```
