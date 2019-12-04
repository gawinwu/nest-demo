import { Controller, Get } from '@nestjs/common';
import { NavService } from '../../../service/nav/nav.service';

import { Config } from '../../../config/config'

@Controller(`${Config.adminPath}/nav`)
export class NavController {
    constructor(private navService:NavService){
    }

    @Get()
    async index(){
        // return await this.navService.findAll({"title":"论坛"});
        return await this.navService.findAll({});
    }

    @Get('add')
    async add(){
        return await this.navService.add({           
            "title":"LOL",
            "url":'LOL.qq.com'
        });
    }

    @Get('update')
    async update(){
        return await this.navService.update({"id":4},{"title":"nest教程",url:"next.com"});
    }

    @Get('remove')
    async remove(){
        return await this.navService.remove({"id":5});
    }
}
