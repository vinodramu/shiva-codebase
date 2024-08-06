import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
    constructor(private readonly elasticsearchService: ElasticsearchService) { }

    async indexDocument(index: string, document: any): Promise<any> {
        return this.elasticsearchService.index({
            index,
            body: document,
        });
    }

    async search(index: string, query: any): Promise<any> {
        return this.elasticsearchService.search({
            index,
            body: query,
        });
    }

    async updateDocument(index: string, id: string, doc: any): Promise<any> {
        return this.elasticsearchService.update({
            index,
            id,
            body: {
                doc,
            },
        });
    }

    async deleteDocument(index: string, id: string): Promise<any> {
        return this.elasticsearchService.delete({
            index,
            id,
        });
    }
}
