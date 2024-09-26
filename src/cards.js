import React ,{useState} from 'react';

const Card = () => {
    const [headerText2, setHeaderText2] = useState("Invite your friends");
  const [headerText1, setHeaderText1] = useState("Join our referal program!");
  const [headerText3, setHeaderText3] = useState("Power by viral loop");
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
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-full max-w-lg p-4 bg-white  shadow sm:p-6 md:p-8">
                <form className="space-y-6 bg-white" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
        {headerText1}
      </h5>
      <h5 className="text-xl font-medium text-gray-900 dark:text-white mt-4 text-center">
        {headerText2}
      </h5>                
                    <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"></label>
                        <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="Doe" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="name@company.com" required />
                    </div>
                    <div className="flex items-start">
                      
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join and win</button>
                </form>
                <h6 className=" font-mt-2 text-gray-900 dark:text-white mt-4 text-center">
        {headerText3}
      </h6>
            </div>
        </div>
    );
};

export default Card;