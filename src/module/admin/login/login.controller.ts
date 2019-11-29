import { Controller, Get, Post, Render, UsePipes, Body, Response, Request } from '@nestjs/common';

import { Config } from '../../../config/config'

import { ValidatorPipe } from '../../../pipe/validator.pipe'
import * as Joi from '@hapi/joi';
import bodyParser = require('body-parser');


let userSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
    // age: Joi.number().integer().min(16).max(90).required(),
    // age: Joi.number().integer().min(16).max(90).rule({ message: '年龄最小16，最大90' }),//自定义message
    // email:Joi.string().email()
})

@Controller(`${Config.adminPath}/login`)
export class LoginController {
    @Get()
    @Render('admin/login')
    login() {

    }

    @Post()
    @UsePipes(new ValidatorPipe(userSchema))
    doLogin(@Body() body, @Response() res, @Request() req) {
        let username: string = body.username
        // let password: string = body.password
        // res.cookie('username', body.username, { maxAge: 1000 * 60 * 10, httpOnly: true, signed: true })
        req.session.username = username
        // console.log(username);

        res.redirect('panel')
    }
}
