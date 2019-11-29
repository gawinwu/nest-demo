import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidatorPipe implements PipeTransform {
    private schema
    constructor(schema) {
        this.schema = schema
    }
    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(value)
        if (error) {
            // console.log(error);
            throw new BadRequestException(error.message);
        }
        return value;
    }
}
