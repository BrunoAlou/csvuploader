// src/pages/Home/Home.tsx

import React, { useState } from 'react';
import FileUploadComponent from '../../components/FileUploadComponent/FileUploadComponent';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';
import DataDisplayComponent from '../../components/DataDisplayComponent/DataDisplayComponent';
import { uploadFile, searchData, clearDataOnServer } from '../../services/apiService';

import './Home.css';

const Home = () => {
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    const handleFileUpload = async (file: File) => {
        const uploadStatus = await uploadFile(file);
        if (uploadStatus) {
            setIsFileUploaded(uploadStatus); 
        } else {
            setIsFileUploaded(uploadStatus); 
        }
    };

    const clearData = async () => {
        const clearStatus = await clearDataOnServer();
        if (clearStatus) {
            setIsFileUploaded(!clearStatus); 
        }
    };

    const handleSearch = async (query: string) => {
        try {
            const result = await searchData(query);
            setFilteredData(result.data || []);
        } catch (error) {
            console.error('Error during search:', error);
        }
    }; 

    return (
        <div className="home">
            <FileUploadComponent 
                onFileUpload={handleFileUpload} 
                onClearData={clearData} 
            />            
            {isFileUploaded && (
                <>
                    <SearchBarComponent onSearch={handleSearch}/>
                    <DataDisplayComponent data={filteredData} />
                </>
            )}
        </div>
    );
};

export default Home;
