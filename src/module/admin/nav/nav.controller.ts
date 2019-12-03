import { Controller, Get } from '@nestjs/common';

import { NavService } from '../../../service/nav/nav.service';

import { Config } from '../../../config/config'

@Controller(`${Config.adminPath}/nav`)
export class NavController {

    constructor(private navService: NavService) {
    }

    @Get()
    async index() {
        // return await this.navService.findAll({ "_id": "5aea853a418a7d26d499d623" }, 'title url')
        return await this.navService.findAll({}, 'title url')
    }

    @Get('add')
    async doAdd() {
        let result = await this.navService.add({
            title: '微信',
            url: 'wx.qq.com',
            status: 1
        });
        return result
    }

    @Get('update')
    async doUpdate() {
        let result = await this.navService.update({
            _id: '5de67f027055fc13c47e45fa'
        }, {
            title: 'QQ~',
            url: 'www.qq.com'
        });
        return result
    }
    
    @Get('delete')
    async doDelete() {
        let result = await this.navService.delete({
            _id: '5af96dbf34cdff24b88a2053'
        });
        return result
    }

}
