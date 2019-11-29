# Nest skeleton


#### 包括 模块、服务、控制器 的框架结构
用于组织中大型项目的程序结构;  
程序很小时，用根模块即可。
#### 一、创建模块
```
    // 统一放在module文件夹下，方便管理
    # nest g module module/admin
    # nest g module module/api
    # nest g module module/default

    // 创建控制器:
    # nest g controller module/admin/user
    # nest g controller module/admin/news

    # nest g controller module/default/index
    # nest g controller module/default/news

    # nest g controller module/api/v1/news

    // 创建一个根模块下的service
    # nest g service service/news
```
子模块如果有创建服务，使用方法见<a href="module与service.md">module与service.md</a>  


#### 二、@module() 装饰器接受一个描述模块属性的对象： 
```
    providers   
    由 Nest 注入器实例化的提供者，并且可以至少在整个模块中共享   

    controllers    
    必须创建的一组控制器   

    imports  
    导入模块的列表，这些模块导出了此模块中所需提供者  

    exports   
    由本模块提供并应在其他模块中可用的提供者的子集    

```

#### 三、配置模板全局变量
```
    res.locals.userinfo=userinfo;
    // 一般用于登录后的controller

    <%=userinfo.username%> // 模板使用
```

#### 四、配置可修改的后台地址
1、添加配置文件
```
    // src\config\config.ts
```
2、admin下的控制器修改
```
    import { Config } from '../../../config/config'
    @Controller(`${Config.adminPath}/news`)
```
3、模板使用
```
    3.1、加入中间件
        // src\middleware\init.middleware.ts
        res.locals.config = Config;
    3.2、模板内使用
        <%=config.username%>
```


#### 五、扩展模板
1、建立一个模板扩展类
```
    // src\extend\helper.ts
```
2、加入到全局中间件
```
    // src\middleware\init.middleware.ts
    import {Helper} from '../extend/helper'
    res.locals.helper=Helper
```
3、模板使用
```
    截取字符串： <%=helper.substring('截取字符串',1,3)%>
```

#### 六、pipe (管道)
```
    // 使用joi数据验证
    // Joi 库： https://github.com/hapijs/joi
    // https://hapi.dev/family/joi/?v=16.1.8
    # npm i @hapi/joi --save

    // 添加一个pipe
    # nest g pipe pipe/validator

    // Test
    // src\module\admin\login
```

#### 七、守卫 (权限控制)
1、创建一个守卫
```
    # nest g guard guard/admin
```
2、配置
```
    // src\module\admin\admin.module.ts
    import { APP_GUARD } from '@nestjs/core';
    import {AdminGuard} from '../../guard/admin.guard'

    // 以上采用模块配置，更多配置方法： 
    https://docs.nestjs.cn/6/guards
```
```
2、在守卫里获取cookie和session
```
    // src\guard\admin.guard.ts
```