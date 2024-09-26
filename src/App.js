import React from 'react';
import Card from './cards'; // Ensure the path is correct
import Footer from './footer';
import Sidebar from './sidebar';

function App() {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-100">
            <div className="flex flex-1">
                <div className="w-40">
                    <Sidebar />
                </div>
                <div className="w-60">
                    <Card />
                </div>
            </div>
            <Footer className="mt-auto" />
        </div>
    );
}

export default App;