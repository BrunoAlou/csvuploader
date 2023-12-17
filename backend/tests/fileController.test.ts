import { FileController } from '../src/controllers/fileController';
import { Request, Response } from 'express';
import { MulterRequest } from '../src/controllers/fileController';
import stream from 'stream'; 

const mockRequest = (file: Express.Multer.File): MulterRequest => {
  return {
    file,
  } as MulterRequest; 
};

const mockResponse = (): Response => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('FileController', () => {
  const fileController = new FileController();
  const mockReadStream = new stream.Readable();

  it('should upload a file successfully', async () => {
    const mockFile: Express.Multer.File = {
      fieldname: 'file',
      originalname: 'test.csv',
      encoding: '7bit',
      mimetype: 'text/csv',
      size: 1024,
      destination: 'uploads/',
      filename: 'test.csv',
      stream: mockReadStream,
      path: 'uploads/test.csv',
      buffer: Buffer.from('some data, some more data')
    };

    const req = mockRequest(mockFile);
    const res = mockResponse();

    await fileController.uploadFile(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "The file was uploaded successfully." });
  });

});
