import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white h-0">
            <div className="h-10 mx-auto w-full max-w-screen-xl p-4 py-1 lg:py-8">
                <div className="flex items-center justify-between sm:flex-row">
                <button className="mt-4 ml-4 bg-white text-black px-4 py-2 rounded  sm:mt-0">
                        cancel
                    </button>
                    <div className="flex mt-1 sm:justify-center sm:mt-0 bold">
                 <h5>Form widget</h5>
                        {/* Add other social icons here */}
                    </div>
                    {/* Save Button */}
                    <button className="mt-4 ml-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 sm:mt-0">
                        Save
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
