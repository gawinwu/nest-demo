import * as Joi from '@hapi/joi';

import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';



@Injectable()
export class UserPipe implements PipeTransform {
    private schema
    constructor(schema) {
        this.schema = schema
    }

    transform(value: any, metadata: ArgumentMetadata) {
        // const { error } = Joi.validate(value, this.schema)
        const { error } = this.schema.validate(value)
        console.log(`error: ${error}`);

        if (error) {
            console.log('---------------error---------------');
            console.log(error);
            console.log('------error.message------');
            console.log(error.message);
            return false
        }
        return value;
    }
}
