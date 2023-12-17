import { uploadFile } from '../services/apiService';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'File uploaded successfully!' }),
    })
) as jest.Mock;
const mockedFetch = jest.fn();
global.fetch = mockedFetch;

describe('apiService', () => {
    beforeEach(() => {
        mockedFetch.mockClear();
    });

    it('uploadFile sends a file and returns a success message', async () => {
        const file = new File(['content'], 'test.csv', { type: 'text/csv' });
        const result = await uploadFile(file);

        expect(result).toBe('File uploaded successfully!');
        expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
    });
});
