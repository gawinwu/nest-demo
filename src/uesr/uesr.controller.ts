import { Controller, Get, UsePipes, Query } from '@nestjs/common';

import { UserPipe } from '../pipe/user.pipe'
import * as Joi from '@hapi/joi';

let userSchema = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().integer().min(16).max(90).required(),
})

@Controller('user')
export class UesrController {

    @Get()
    @UsePipes(new UserPipe(userSchema))
    index(@Query() info) {
        console.log('---------------info---------------');
        console.log(info);

        return '会员模块!'
    }

}
