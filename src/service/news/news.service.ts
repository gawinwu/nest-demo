import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    getNewsList() {
        return [
            { 'title': '新闻标题 01' },
            { 'title': '新闻标题 02' },
            { 'title': '新闻标题 03' },
            { 'title': '新闻标题 04' },
            { 'title': '新闻标题 05' }
        ]
    }
}
