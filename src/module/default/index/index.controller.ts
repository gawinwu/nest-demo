import { Controller, Get, Render, Response, Request, Post, Body, UsePipes } from '@nestjs/common';

@Controller()
export class IndexController {

    @Get()
    @Render('default/index')
    getHello() {
        let ret = { 'title': 'nest demo', 'templatePath': 'template/website/index.ejs' }
        return ret
    }

    // 通配符的路由需要放下面
    // 注意，可能 会引起其它路由无法访问
    // @Get(':id')
    // getUser(@Param() param) {
    //     let userId = param.id
    //     return `用户ID:${userId}`
    // }
}
