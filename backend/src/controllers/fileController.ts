import { Request, Response } from 'express';
import { FileService } from '../services/fileService';

export class FileController {
    private fileService: FileService;

    constructor() {
        this.fileService = new FileService();
    }

    public uploadFile = async (req: Request, res: Response): Promise<Response> => {

        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded." });
        }

        try {
            await this.fileService.processCSV(req.file.path);
            return res.status(200).json({ message: "The file was uploaded successfully." });
        } catch (error) {
            return res.status(500).json({ message: error instanceof Error ? error.message : "An unknown error occurred." });
        }
    };

    public clearData =async (req: Request, res: Response): Promise<Response> => {
        this.fileService.clearData();
        return res.status(200).json({ message: 'Data cleared successfully' });
    };

    public getdata = async (req: Request, res: Response): Promise<Response> => {
        const data = await FileService.returnData();
        return res.status(200).json({ data: data });
    };
}
