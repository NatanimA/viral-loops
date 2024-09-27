import React from 'react';
import {  useSelector } from 'react-redux';


const Preview = () => {
  const firstNameToggle = useSelector((state) => state.accordion.firstNameToggle);
  const lastNameToggle = useSelector((state) => state.accordion.lastNameToggle);
  const labelBackground = useSelector((state) => state.accordion.labelBackground);
  const headingFontFamily = useSelector((state) => state.accordion.headingFontFamily);
  const headingFontSize = useSelector((state) => state.accordion.headingFontSize);
  const headingBold = useSelector((state) => state.accordion.headingBold);
  const headingItalic = useSelector((state) => state.accordion.headingItalic);
  const headingUnderline = useSelector((state) => state.accordion.headingUnderline);
  const headingTextAlign = useSelector((state) => state.accordion.headingTextAlign);
  const headingText = useSelector((state) => state.accordion.headingText);
  const headingColor = useSelector((state) => state.accordion.headingColor);
  const subtitleFontFamily = useSelector((state) => state.accordion.subtitleFontFamily);
  const subtitleFontSize = useSelector((state) => state.accordion.subtitleFontSize);
  const subtitleBold = useSelector((state) => state.accordion.subtitleBold);
  const subtitleItalic = useSelector((state) => state.accordion.subtitleItalic);
  const subtitleUnderline = useSelector((state) => state.accordion.subtitleUnderline);
  const subtitleTextAlign = useSelector((state) => state.accordion.subtitleTextAlign);
  const subtitleText = useSelector((state) => state.accordion.subtitleText);
  const subtitleColor = useSelector((state) => state.accordion.subtitleColor);
  const buttonFontFamily = useSelector((state) => state.accordion.buttonFontFamily);
  const buttonFontSize = useSelector((state) => state.accordion.buttonFontSize);
  const buttonBold = useSelector((state) => state.accordion.buttonBold);
  const buttonItalic = useSelector((state) => state.accordion.buttonItalic);
  const buttonUnderline = useSelector((state) => state.accordion.buttonUnderline);
  const buttonBackground = useSelector((state) => state.accordion.buttonBackground);
  const buttonText = useSelector((state) => state.accordion.buttonText);
  const buttonTextColor = useSelector((state) => state.accordion.buttonTextColor);
  const headerText3 = "Powered by Viral Loops";


  

   

    return (
        <div className="flex justify-center items-center h-screen bg-grey shadow-black p-6 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-8/12 mx-auto "> {/* Adjusted width */}
            <div className={`p-12 rounded-3xl shadow-lg w-full`} style={{ backgroundColor: labelBackground }}>
                <form className="space-y-6" action="#">
                    <h5 className={`${headingFontSize} ${headingFontFamily} mt-4`} style={{ fontWeight: headingBold ? 'bold' : '', fontStyle: headingItalic ? 'italic' : '', textDecoration: headingUnderline ? 'underline' : '', textAlign: headingTextAlign ? "center" : '',color: headingColor }}>
                        {headingText}
                    </h5>
                    <h5 className={`mt-4 ${subtitleFontSize} ${subtitleFontFamily}`} style={{ fontWeight: subtitleBold ? 'bold' : '', fontStyle: subtitleItalic ? 'italic' : '', textDecoration: subtitleUnderline ? 'underline' : '', textAlign: subtitleTextAlign ? "center" : '' , color: subtitleColor}} >
                        {subtitleText}
                    </h5>
                    <div>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-black">First Name {firstNameToggle ? (<span className="text-red-500">*</span>) : ''}</label>
                        <input type="text" name="firstName" id="firstName" className="bg-white border border-gray-300 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" placeholder={`Your first name ${firstNameToggle ? '*' : ''}`}  required={firstNameToggle} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-black">Last Name {lastNameToggle ? (<span className="text-red-500">*</span>) : ''}</label>
                        <input type="text" name="lastName" id="lastName" className="bg-white border border-gray-300 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" placeholder={`Your last name ${lastNameToggle ? '*' : ''}`} required={lastNameToggle} />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email <span className="text-red-500">*</span></label>
                        <input type="email" name="email" id="email" className="bg-white border border-gray-300 rounded-lg focus:ring-white focus:border-white block w-full p-2.5" placeholder="Your email address *" required={true} />
                    </div>
                    <div className="flex items-start"></div>
                    <button type="submit" className={`w-full  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-5 py-2.5 text-center ${buttonFontSize} ${buttonFontFamily}`} style={{ fontWeight: buttonBold ? 'bold' : '', fontStyle: buttonItalic ? 'italic' : '', textDecoration: buttonUnderline ? 'underline' : '', backgroundColor: buttonBackground , color: buttonTextColor}} onClick={(e) => e.preventDefault()}>{buttonText}</button>
                </form>
                <h6 className={`font-mt-2  mt-4 text-center ${headingFontFamily}`} style={{color: headingColor}}>
                    {headerText3}
                </h6>
            </div>
        </div>
    );
};

export default Preview;
