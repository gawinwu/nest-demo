# Nest middleware Demo

### 全局性中间件无法使用类，只能使用函数
在 src\main.ts 中直接配置的中间件无法使用类  

需要使用类配置全局，变通方式是
```
在 src\app.module.ts 中配置
......
.forRoutes('*');   // 匹配所有的路由
......
```



