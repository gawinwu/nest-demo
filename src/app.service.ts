import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        let myName = 'yapeht'
        return `Hello ${myName}`;
    }
}
