import { FileService } from './fileService';
import { CSVFile } from '../models/fileModel';

export class UserService {
    public searchInCSV(query: string): CSVFile[] {
        const data = FileService.getData();

        const filteredData = data.slice(1).filter(row => {
            return Object.values(row).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
            );
        });

        return filteredData;
    }
}
