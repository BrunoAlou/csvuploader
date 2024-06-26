import { toast } from 'react-toastify';

const API_URL = 'http://localhost:3000';

const handleResponse = async (response: Response) => {
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Service error');
    }

    return response.json();
};

export const uploadFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${API_URL}/api/files`, {
            method: 'POST',
            body: formData,
        });

        const result = await handleResponse(response);
        toast.success(result.message);
        return true;
    } catch (error) {
        toast.error('File upload failed.');
        return false;
    }
};

export const searchData = async (query: string) => {
    if(query === ""){
        const response = await fetch(`${API_URL}/api/getdata`);
        return handleResponse(response);
    }else{
        const response = await fetch(`${API_URL}/api/users?q=${query}`);
        return handleResponse(response);
    }
};

export const clearDataOnServer = async () => {
    try {
        const response = await fetch('http://localhost:3000/clear-data', {
            method: 'POST',
        });

        if (!response.ok) {
            toast.error('Failed to clear data');
            return false;
        }

        const result = await response.json();
        toast.success(result.message);
        return true;
    } catch (error) {
        console.error('Error:', error);
    }
};