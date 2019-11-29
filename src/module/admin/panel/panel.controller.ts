import { Controller, Get, UseGuards } from '@nestjs/common';

import { Config } from '../../../config/config'

@Controller(`${Config.adminPath}/panel`)
export class PanelController {
    @Get()
    panel() {
        return '后面管理面板'
    }
}
