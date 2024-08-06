import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchController } from './elastic.controller';
import { SearchService } from './elastic.service';
import * as fs from 'fs';
import * as path from 'path';

@Module({
    imports: [
        ElasticsearchModule.register({
            node: 'https://192.168.0.102:9200',
            auth: {
                username: '',
                password: '',
            },
            tls: {
                ca: [fs.readFileSync(path.join('C:', 'Users', 'Electem', 'Downloads', 'kibana-8.14.3-windows-x86_64', 'kibana-8.14.3', 'data', 'ca_1722931260353.crt'))],
            }
        }),
    ],
    controllers: [SearchController],
    providers: [SearchService],
    exports: [ElasticsearchModule],
})
export class SearchModule { }
