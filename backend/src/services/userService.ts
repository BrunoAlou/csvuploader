import { FileService } from './fileService';
import { CSVFile } from '../models/fileModel'; // Substitua por sua definição de modelo

export class UserService {

    public searchInCSV(query: string): CSVFile[] {
        // Obter os dados do CSV do FileService
        const data = FileService.getData();

        // Filtrar os dados com base na query
        const filteredData = data.filter(row => {
            return Object.values(row).some(value =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            );
        });

        return filteredData;
    }
}
