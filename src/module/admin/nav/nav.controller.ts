import { Controller, Get } from '@nestjs/common';

import { NavService } from '../../../service/nav/nav.service';

import { Config } from '../../../config/config'

@Controller(`${Config.adminPath}/nav`)
export class NavController {

    constructor(private navService: NavService) {
    }

    @Get()
    async index() {
        return await this.navService.findAll()
    }
}
