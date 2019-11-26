import { Controller, Get, Render, Response, Request, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    @Render('default/index')
    getHello() {
        let ret = { 'title': 'nest demo', 'templatePath': 'template\default\index.ejs' }
        return ret
        // return this.appService.getHello();
    }

    @Post('add')
    doAdd(@Body() body, @Response() res) {
        console.log(body);
        res.redirect('/');  //路由跳转        

    }

    @Get('test')
    setCookie(@Response() res, @Request() req) {
        res.cookie('username', '老张 cookies', { maxAge: 1000 * 60 * 10, httpOnly: true, signed: true })
        req.session.username = '老张'
        res.send('成功设置 cookie、session')
        // 当使用了Response ，直接输入需要 res.send()。传值还是 retrun
    }

    @Get('cookie')
    getCookie(@Request() req) {
        console.log(`req.session.username = ${req.session.username}`)
        return req.signedCookies.username
    }

    // 通配符的路由需要放下面
    // 注意，可能 会引起其它路由无法访问
    // @Get(':id')
    // getUser(@Param() param) {
    //     let userId = param.id
    //     return `用户ID:${userId}`
    // }
}
