import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.log('这是user中间件');
        next();
    }
}
