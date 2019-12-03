import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Nav } from '../../interface/nav.interface'

@Injectable()
export class NavService {
    constructor(
        @InjectModel('Nav') private readonly navModel
    ) { }

    async findAll(json: Nav = {}, fields?: String) { //约定传入的数据必须满足接口定义
        return await this.navModel.find(json, fields).exec();
    }

    async add(json: Nav) {
        let nav = new this.navModel(json)
        return await nav.save()
    }

    async update(json: Nav, json2: Nav) {
        let result = await this.navModel.updateOne(json, json2)
        return result
    }

    async delete(json: Nav) {
        let result = await this.navModel.deleteOne(json)
        return result
    }
}
