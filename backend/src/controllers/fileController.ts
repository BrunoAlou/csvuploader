import { Request, Response } from 'express';
import { FileService } from '../services/fileService';

export interface MulterRequest extends Request {
    file: Express.Multer.File;
}

export class FileController {
    private fileService: FileService;

    constructor() {
        this.fileService = new FileService();
    }
   
    public uploadFile = async (req: MulterRequest, res: Response) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded." });
            }
    
            await this.fileService.processCSV(req.file);
            res.status(200).json({ message: "The file was uploaded successfully." });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unknown error occurred." });
            }        
        }
    };

    public clearData = () => {
        this.fileService.clearData();
    };
}
