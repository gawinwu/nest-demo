import { Controller, Get, Render, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { createWriteStream } from 'fs';

import { join } from 'path';

@Controller('upload')
export class UploadController {

    @Get()
    @Render('default/upload')
    index() {

    }

    @Post('add')
    @UseInterceptors(FileInterceptor('pic'))
    doAdd(@Body() body, @UploadedFile() file) {
        console.log(body);
        console.log(file);  //上传图片的信息  必须在form的属性里面配置enctype="multipart/form-data"

        console.log(__dirname);

        var writeStream = createWriteStream(join(__dirname, '../../public/upload', `${Date.now()}-${file.originalname}`))

        writeStream.write(file.buffer);

        return '上传图片成功';


    }
}
