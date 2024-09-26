import React from 'react';
import Card from './cards'; // Ensure the path is correct
import Footer from './footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-100">
            <div className="flex-grow flex items-center justify-center">
                <Card />
            </div>
            <Footer />
        </div>
    );
}

export default App;
