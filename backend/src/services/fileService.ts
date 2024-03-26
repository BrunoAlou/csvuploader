// fileService.ts

import { CSVFile } from '../models/fileModel';
import fs from 'fs';
import { parse } from 'csv-parse';

export class FileService {
    private static data: CSVFile[] = [];

    public async processCSV(filePath: string): Promise<void> {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const delimiter = this.detectDelimiter(fileContent);
        FileService.data = await new Promise((resolve, reject) => {
            parse(fileContent, {
                columns: true,
                skip_empty_lines: true,
                delimiter: delimiter,
                relax_quotes: true,
            }, (err, output: CSVFile[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(output);
                }
            });
        });
    }

    public static search(query: string): CSVFile[] {
        return FileService.data.filter(row => {
            return Object.values(row).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
            );
        });
    }

    public static getData(): CSVFile[] {
        return FileService.data;
    }
    public static async returnData(): Promise<CSVFile[]> {
        return FileService.data;
    }

    public clearData(): void {
        FileService.data = [];
    }

    private detectDelimiter(csvContent: string): string {
        const delimiters = [',', ';', '\t'];
        let maxDelimiter = '';
        let maxCount = 0;

        const headerLine = csvContent.split('\n')[0];

        delimiters.forEach(delimiter => {
            const count = (headerLine.match(new RegExp(`\\${delimiter}`, 'g')) || []).length;
            if (count > maxCount) {
                maxCount = count;
                maxDelimiter = delimiter;
            }
        });

        return maxDelimiter || ';';
    }

}