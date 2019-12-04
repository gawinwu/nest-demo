# Nest skeleton


#### 关于子模块的service

##### 一、子模块内的service
controller正常使用内部service

##### 二、在子模块里使用根模块下的service，
1、需要在子模块里先申明
```
    // src\module\default\default.module.ts
    // 使用根模块下的服务 NewsService
    import { NewsService } from '../../service/news/news.service'
    providers:[NewsService]
```
2、在子模块controller里正常使用
```
    // src\module\default\news\news.controller.ts
```

##### 三、子模块之间的service共享
1、先将子模块service暴露
```
    # nest g module/share
    # nest g service module/share/base

    // src\module\share\share.module.ts
    import { BaseService } from './base/base.service';
    exports: [BaseService] // 共享本服务给其它子模块使用
```
2、使用的子模块引入其它的模块
```
    // src\module\default\default.module.ts
    // 引入其他模块
    import { ShareModule } from '../share/share.module';
    imports:[ShareModule],//引入其他模块
```
3、在controller里正常使用
```
    src\module\default\news\news.controller.ts   
```

##### 四、注意事项
    
1、不建议使用子模块内创建service文件，最好是统一放在 src/service 然后在子模块的*.module.ts配置使用        
    
2、当service使用了依赖注入，子模块与根模块.module.ts同时配置相同的service会报错

