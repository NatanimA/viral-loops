import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white h-0">
            <div className="h-1 mx-auto w-full max-w-screen-xl p-4 py-1 lg:py-8">
                <div className="flex  justify-between sm:flex-row">
                <button className=" ml-2 bg-white text-black px-2  sm:mt-0">
                        cancel
                    </button>
                    <div className="flex mt-1 sm:justify-center sm:mt-0 bold">
                 <h5>Form widget</h5>
                        {/* Add other social icons here */}
                    </div>
                    {/* Save Button */}
                    <button className="justify-center mb-2 mt-2 ml-2 bg-black text-white px-4  rounded hover:bg-gray-800 sm:mt-0">
                        Save
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
