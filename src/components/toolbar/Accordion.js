import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleFirstName,
  toggleLastName,
  setLabelBackground,
  setHeadingFontFamily,
  setHeadingFontSize,
  setHeadingBold,
  setHeadingItalic,
  setHeadingUnderline,
  setHeadingTextAlign,
  setHeadingText,
  setSubtitleFontFamily,
  setSubtitleFontSize,
  setSubtitleBold,
  setSubtitleItalic,
  setSubtitleUnderline,
  setSubtitleTextAlign,
  setSubtitleText,
  setButtonFontFamily,
  setButtonFontSize,
  setButtonBold,
  setButtonItalic,
  setButtonUnderline,
  setButtonBackground,
  setButtonText,
  setHeadingColor,
  setSubtitleColor,
  setButtonTextColor
} from '../../redux/actions/styleActions';
import Toggle from './Toggle';
import ColorPicker from './ColorPicker';
import TypographySettings from './TypographySettings';
import TextInput from './TextInput';

const Accordion = () => {
  const dispatch = useDispatch();

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

  const [activeIndex, setActiveIndex] = React.useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      title: "Style",
      content: (
        <div className="p-4 bg-white">
          <Toggle
            label="First Name"
            isChecked={firstNameToggle}
            onToggle={() => dispatch(toggleFirstName())}
          />
          <Toggle
            label="Last Name"
            isChecked={lastNameToggle}
            onToggle={() => dispatch(toggleLastName())}
          />
          <ColorPicker
            label="Background"
            color={labelBackground}
            onChange={(e) => dispatch(setLabelBackground(e.target.value))}
          />
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Typography</h3>
            <TypographySettings
              label="Heading"
              fontFamily={headingFontFamily}
              setFontFamily={(fontFamily) => dispatch(setHeadingFontFamily(fontFamily))}
              fontSize={headingFontSize}
              setFontSize={(fontSize) => dispatch(setHeadingFontSize(fontSize))}
              bold={headingBold}
              color={headingColor}
              setColor={(color) => dispatch(setHeadingColor(color))}
              setBold={(isBold) => dispatch(setHeadingBold(isBold))}
              italic={headingItalic}
              setItalic={(isItalic) => dispatch(setHeadingItalic(isItalic))}
              underline={headingUnderline}
              setUnderline={(isUnderline) => dispatch(setHeadingUnderline(isUnderline))}
              textAlign={headingTextAlign}
              setTextAlign={(textAlign) => dispatch(setHeadingTextAlign(textAlign))}
             
              
            />
            <TypographySettings
              label="Subtitle"
              fontFamily={subtitleFontFamily}
              setFontFamily={(fontFamily) => dispatch(setSubtitleFontFamily(fontFamily))}
              fontSize={subtitleFontSize}
              setFontSize={(fontSize) => dispatch(setSubtitleFontSize(fontSize))}
              bold={subtitleBold}
              setBold={(isBold) => dispatch(setSubtitleBold(isBold))}
              italic={subtitleItalic}
              setItalic={(isItalic) => dispatch(setSubtitleItalic(isItalic))}
              underline={subtitleUnderline}
              setUnderline={(isUnderline) => dispatch(setSubtitleUnderline(isUnderline))}
              textAlign={subtitleTextAlign}
              setTextAlign={(textAlign) => dispatch(setSubtitleTextAlign(textAlign))}
              color={subtitleColor}
              setColor={(color) => dispatch(setSubtitleColor(color))}
            />
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Buttons</h3>
            <TypographySettings
              label="Button Text"
              fontFamily={buttonFontFamily}
              setFontFamily={(fontFamily) => dispatch(setButtonFontFamily(fontFamily))}
              fontSize={buttonFontSize}
              setFontSize={(fontSize) => dispatch(setButtonFontSize(fontSize))}
              bold={buttonBold}
              setBold={(isBold) => dispatch(setButtonBold(isBold))}
              italic={buttonItalic}
              setItalic={(isItalic) => dispatch(setButtonItalic(isItalic))}
              underline={buttonUnderline}
              setUnderline={(isUnderline) => dispatch(setButtonUnderline(isUnderline))}
              showTextAlign={false} // Text align is not typically needed for buttons
              color={buttonTextColor}
              setColor={(color) => dispatch(setButtonTextColor(color))}
            />
            <ColorPicker
              label="Button Background"
              color={buttonBackground}
              onChange={(e) => dispatch(setButtonBackground(e.target.value))}
            />
          </div>
        </div>
      )
    },
    {
      title: "Titles",
      content: (
        <div className="p-4 bg-white">
          <h3 className="text-lg font-bold text-gray-700 mb-4">JOINING STATE</h3>
          <div className="mt-6">
            <TextInput
              label="Heading Text"
              value={headingText}
              onChange={(e) => dispatch(setHeadingText(e.target.value))}
            />
            <TextInput
              label="Subtitle Text"
              value={subtitleText}
              onChange={(e) => dispatch(setSubtitleText(e.target.value))}
            />
            <TextInput
              label="Button Text"
              value={buttonText}
              onChange={(e) => dispatch(setButtonText(e.target.value))}
            />
          </div>
        </div>
      ),
    }
  ];

  return (
    <div id="accordion-collapse" data-accordion="collapse" className="w-full sm:w-11/12 md:w-9/12 lg:w-10/12 xl:w-11/12 mx-auto bg-white rounded-lg shadow-md ">
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <h2>
            <button
              type="button"
              className="flex items-center justify-between w-full p-4 font-medium text-left text-gray-500 bg-gray-100 border border-gray-200 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <svg
                className={`w-6 h-6 ${activeIndex === index ? "rotate-180" : ""} transition-transform duration-300`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.946l3.71-3.717a.75.75 0 111.06 1.06l-4.25 4.27a.75.75 0 01-1.06 0L5.23 8.271a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </h2>
          <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? "max-h-screen" : "max-h-0"}`}>
            <div className="p-4">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
