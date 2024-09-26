import React, { useState } from 'react';

const Card = () => {
    const [headerText2, setHeaderText2] = useState("Invite your friends");
    const [headerText1, setHeaderText1] = useState("Join our referral program!");
    const [headerText3, setHeaderText3] = useState("Powered by viral loop");

    const handleChangeText1 = (event) => {
        setHeaderText1(event.target.value);
    };

    const handleChangeText2 = (event) => {
        setHeaderText2(event.target.value);
    };

    const handleChangeText3 = (event) => {
        setHeaderText3(event.target.value);
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-grey shadow-black">
             {/* Toggle positioned at the top */}
             <label className="relative cursor-pointer mb-4">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-[53px] h-7 flex items-center bg-gray-300 rounded-full text-[9px] peer-checked:text-[#007bff] text-gray-300 font-extrabold after:flex after:items-center after:justify-center peer after:content-['Sharing states'] peer-checked:after:content-['Joining state'] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#007bff]">
                    </div>
                </label>
            <div className="w-full max-w-lg p-4 bg-white">   
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-black text-center">
                        {headerText1}
                    </h5>
                    <h5 className="text-xl font-medium text-black mt-4 text-center">
                        {headerText2}
                    </h5>
                    <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-black"></label>
                        <input type="text" name="firstName" id="firstName" className="bg-white border border-gray-300 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" placeholder="First name" required />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-black"></label>
                        <input type="text" name="lastName" id="lastName" className="bg-white border border-gray-300 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" placeholder="Last name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="email" name="email" id="email" className="bg-white border border-gray-300 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" placeholder="Your email address" required />
                    </div>
                    <div className="flex items-start"></div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join and win</button>
                </form>
                <h6 className="font-mt-2 text-gray-900 dark:text-white mt-4 text-center">
                    {headerText3}
                </h6>
            </div>
        </div>
    );
};

export default Card;
