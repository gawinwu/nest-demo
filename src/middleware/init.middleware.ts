import { Injectable, NestMiddleware } from '@nestjs/common';
import { Config } from '../config/config'
import { Helper } from '../extend/helper'

@Injectable()
export class InitMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        // console.log('---------middleware/init.middleware---------');
        res.locals.config = Config
        // console.log(Config.adminPath)
        res.locals.helper = Helper

        next();
    }
}
