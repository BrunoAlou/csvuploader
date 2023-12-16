// src/App.tsx

import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';


function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <ToastContainer />
        </div>
    );
}

export default App;
