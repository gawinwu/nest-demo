import { Controller, Get, UseGuards } from '@nestjs/common';

import { Config } from '../../../config/config'

@Controller(`${Config.adminPath}/user`)
export class UserController {
    @Get()
    index() {
        return '后台用户管理'
    }
}
