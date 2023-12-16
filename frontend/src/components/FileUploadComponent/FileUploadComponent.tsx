import React, { useState, useRef } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const FileUploadComponent = ({ onFileUpload, onClearData }: { onFileUpload: (file: File) => void, onClearData: () => void }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            onFileUpload(selectedFile);
        }
    };

    const handleClearData = () => {
        setSelectedFile(null);
        
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onClearData();
    };
    return (
        <Form.Group>
            <Form.Control
                type="file"
                id="custom-file"
                onChange={handleFileChange}
                accept=".csv"
                ref={fileInputRef}
            />
            <Row>
                <Col md={6} xs={12}>
                    <Button variant="primary" onClick={handleUpload} className="mt-2 w-100">
                    Upload
                    </Button>
                </Col>
                <Col md={6} xs={12}>
                    <Button variant="secondary" onClick={handleClearData} className="mt-2 w-100">
                    Clear Data
                    </Button>
                </Col>
            </Row>
        </Form.Group>
    );
};

export default FileUploadComponent;
