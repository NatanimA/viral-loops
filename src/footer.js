import React from 'react';
import { useState } from 'react';
import useLayout from './hooks/useLayout';
import { useSelector } from 'react-redux';
import { toggleFirstName, toggleLastName } from './redux/actions/styleActions';

const Footer = () => {
    const [loading, setLoading] = useState(false);

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
  const buttonTextColor = useSelector((state) => state.accordion.buttonTextColor);
  const buttonText = useSelector((state) => state.accordion.buttonText);
      

    const {saveLayout} = useLayout()
    const handleSave = async () => {
        setLoading(true)
        const surveyConfig = {
            title: headingText,
            subtitle: subtitleText,
            buttonText: buttonText,
            isFirstNameRequired: firstNameToggle,
            isLastNameRequired: lastNameToggle,
            formBackground: labelBackground,
            borderRadius: "10px",
            headingFontStyle: headingFontFamily,
            headingFontSize: headingFontSize,
            headingColor: headingColor,
            isHeadingBold: headingBold,
            isHeadingItalic: headingItalic,
            isHeadingUnderlined: headingUnderline,
            isHeadingCenter: headingTextAlign,
            subtitleFontSize: subtitleFontSize,
            subtitleFontStyle: subtitleFontFamily,
            subtitleColor: subtitleColor,
            isSubtitleBold: subtitleBold,
            isSubtitleItalic: subtitleItalic,
            isSubtitleUnderlined: subtitleUnderline,
            isSubtitleCenter: subtitleTextAlign,
            buttonColor: buttonTextColor,
            buttonBackground: buttonBackground,
            buttonFontSize: buttonFontSize,
            buttonFontStyle: buttonFontFamily,
            isButtonBold: buttonBold,
            isButtonItalic: buttonItalic,
            isButtonUnderlined: buttonUnderline,
            buttonRadius: "5px"
          };
        try{
            await saveLayout(surveyConfig)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white shadow-lg transition duration-300 ease-in-out">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-2">
            <div className="flex justify-between items-center">
                <button className="bg-white text-black mx-0 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out">
                    Cancel
                </button>
                <h5 className="font-bold text-center text-lg text-gray-700">Form Widget</h5>
                <button 
                    className={`bg-black text-white mx-0 px-4 py-2 rounded transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`} 
                    onClick={handleSave} 
                    disabled={loading}
                >
                    {loading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                            </svg>
                            Saving...
                        </span>
                    ) : (
                        'Save'
                    )}
                </button>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
