// fileService.ts

import { CSVFile } from '../models/fileModel';
import fs from 'fs';
import { parse } from 'csv-parse';

export class FileService {
    private static data: CSVFile[] = []; // Tornando 'data' estático para acesso global

    public async processCSV(file: Express.Multer.File): Promise<void> {
        const fileContent = fs.readFileSync(file.path, 'utf-8');
        
        FileService.data = await new Promise((resolve, reject) => {
            parse(fileContent, {
                columns: true,
                skip_empty_lines: true
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
                value.toString().toLowerCase().includes(query.toLowerCase())
            );
        });
    }

    public static getData(): CSVFile[] {
        return FileService.data;
    }
    
    public clearData(): void {
        FileService.data = [];
    }
}