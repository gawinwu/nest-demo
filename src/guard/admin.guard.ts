import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Config } from '../config/config'

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        let loginPath = `/${Config.adminPath}/login`
        let req = context.switchToHttp().getRequest()
        // let res = context.switchToHttp().getResponse()
        // console.log(res.signedCookies);

        if (loginPath === req.path) {
            return true
        }

        let username = req.session.username
        if (username != 'admin') {
            return false
        }
        return true;
    }
}
