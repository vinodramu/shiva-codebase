import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { SearchService } from './elastic.service';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) { }

    @Post('index')
    async indexDocument(@Body() body: { index: string; document: any }) {
        return this.searchService.indexDocument(body.index, body.document);
    }

    @Post('search')
    async search(@Body() body: { index: string; query: any }) {
        return this.searchService.search(body.index, body.query);
    }

    @Put('update')
    async updateDocument(
        @Body() body: { index: string; id: string; doc: any },
    ) {
        return this.searchService.updateDocument(body.index, body.id, body.doc);
    }

    @Delete(':index/:id')
    async deleteDocument(
        @Param('index') index: string,
        @Param('id') id: string,
    ) {
        return this.searchService.deleteDocument(index, id);
    }
}
