// src/pages/Home/Home.tsx

import React, { useState } from 'react';
import FileUploadComponent from '../../components/FileUploadComponent/FileUploadComponent';
import SearchBarComponent from '../../components/SearchBarComponent/SearchBarComponent';
import DataDisplayComponent from '../../components/DataDisplayComponent/DataDisplayComponent';
import { uploadFile, searchData, clearDataOnServer } from '../../services/apiService';

import './Home.css';

const Home = () => {
    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const handleFileUpload = async (file: File) => {
        await uploadFile(file);
    };

    const clearData = async () => {
        await clearDataOnServer();
    };

    const handleSearch = async (query: string) => {
        if (!query) {
            setFilteredData(data);
            return;
        }
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
            <SearchBarComponent onSearch={handleSearch} />
            <DataDisplayComponent data={filteredData} />
        </div>
    );
};

export default Home;