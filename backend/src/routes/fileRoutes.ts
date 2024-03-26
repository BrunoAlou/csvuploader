// fileRoutes.ts

import { Router } from 'express';
import { FileController } from '../controllers/fileController';
import multer from 'multer';
import path from 'path';

const router = Router();
const fileController = new FileController();

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads/')
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

router.post('/api/files', upload.single('file'), async (req, res) => {
    await fileController.uploadFile(req, res);
});

router.get('/api/getdata', async (req, res) => {
    await fileController.getdata(req, res);
});

router.post('/clear-data', async (req, res) => {
    await fileController.clearData(req, res);
});

export default router;
