import { CSVFile } from '../models/fileModel';
import fs from 'fs';
import { parse } from 'csv-parse';


export class FileService {
    private data: CSVFile[] = [];

    public async processCSV(file: Express.Multer.File): Promise<void> {
        const fileContent = fs.readFileSync(file.path, 'utf-8');
        
        const records: CSVFile[] = await new Promise((resolve, reject) => {
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
        this.data = records;
    }

    public search(query: string): CSVFile[] {
        return this.data.filter(row => {
            return Object.values(row).some(value => 
                value.toLowerCase().includes(query.toLowerCase())
            );
        });
    }
}
