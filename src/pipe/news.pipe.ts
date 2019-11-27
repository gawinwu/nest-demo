import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NewsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value);
        console.log('-----News管道-----');
        value.id = '8888'
        return value;
    }
}
