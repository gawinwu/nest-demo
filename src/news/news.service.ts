import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    findAll() {
        return [
            { 'title': '新闻 001' },
            { 'title': '新闻 002' },
            { 'title': '新闻 003' },
            { 'title': '新闻 004' },
            { 'title': '新闻 005' }
        ]
    }
}