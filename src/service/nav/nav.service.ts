import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NavService {
    constructor(
        @InjectModel('Nav') private readonly navModel
    ) { }

    async findAll(json = {}) {
        return await this.navModel.find(json).exec();
    }
}

