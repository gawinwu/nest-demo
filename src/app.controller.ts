import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    @Render('default/index')
    getHello() {
        let ret = { 'name': '张小军', age: 80 }
        return ret
        // return this.appService.getHello();
    }
}
