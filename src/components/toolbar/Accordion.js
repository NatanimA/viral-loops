import { useState } from 'react';
import Toggle from './Toggle';
import ColorPicker from './ColorPicker';
import TypographySettings from './TypographySettings';
import TextInput from './TextInput';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstNameToggle, setFirstNameToggle] = useState(false);
  const [lastNameToggle, setLastNameToggle] = useState(false);
  const [labelBackground, setLabelBackground] = useState("#ffffff");

  // State variables for setting the heading style
  const [headingFontFamily, setHeadingFontFamily] = useState("font-sans");
  const [headingFontSize, setHeadingFontSize] = useState("text-base");
  const [headingBold, setHeadingBold] = useState(false);
  const [headingItalic, setHeadingItalic] = useState(false);
  const [headingUnderline, setHeadingUnderline] = useState(false);
  const [headingTextAlign, setHeadingTextAlign] = useState(false);
  const [headingText, setHeadingText] = useState("");

  // State variables for setting the subtitle style
  const [subtitleFontFamily, setSubtitleFontFamily] = useState("font-sans");
  const [subtitleFontSize, setSubtitleFontSize] = useState("text-base");
  const [subtitleBold, setSubtitleBold] = useState(false);
  const [subtitleItalic, setSubtitleItalic] = useState(false);
  const [subtitleUnderline, setSubtitleUnderline] = useState(false);
  const [subtitleTextAlign, setSubtitleTextAlign] = useState(false);
  const [subtitleText, setSubtitleText] = useState("");

  // State variables for setting the button text style
  const [buttonFontFamily, setButtonFontFamily] = useState("font-sans");
  const [buttonFontSize, setButtonFontSize] = useState("text-base");
  const [buttonBold, setButtonBold] = useState(false);
  const [buttonItalic, setButtonItalic] = useState(false);
  const [buttonUnderline, setButtonUnderline] = useState(false);
  const [buttonBackground, setButtonBackground] = useState("#5558db");
  
  const [buttonText, setButtonText] = useState("Button");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 

  const data = [
    {
      title: "Style",
      content: (
        <div className=" p-4 bg-white ">
      {/* Toggles */}
      <Toggle
        label="First Name"
        isChecked={firstNameToggle}
        onToggle={() => setFirstNameToggle(!firstNameToggle)}
      />
      <Toggle
        label="Last Name"
        isChecked={lastNameToggle}
        onToggle={() => setLastNameToggle(!lastNameToggle)}
      />
      
      {/* Background Color Picker */}
      <ColorPicker
        label="Background"
        color={labelBackground}
        onChange={(e) => setLabelBackground(e.target.value)}
      />
      
      {/* Typography Settings */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Typography</h3>
        <TypographySettings
          label="Heading"
          fontFamily={headingFontFamily}
          setFontFamily={setHeadingFontFamily}
          fontSize={headingFontSize}
          setFontSize={setHeadingFontSize}
          bold={headingBold}
          setBold={setHeadingBold}
          italic={headingItalic}
          setItalic={setHeadingItalic}
          underline={headingUnderline}
          setUnderline={setHeadingUnderline}
          textAlign={headingTextAlign}
          setTextAlign={setHeadingTextAlign}
        />
        <TypographySettings
          label="Subtitle"
          fontFamily={subtitleFontFamily}
          setFontFamily={setSubtitleFontFamily}
          fontSize={subtitleFontSize}
          setFontSize={setSubtitleFontSize}
          bold={subtitleBold}
          setBold={setSubtitleBold}
          italic={subtitleItalic}
          setItalic={setSubtitleItalic}
          underline={subtitleUnderline}
          setUnderline={setSubtitleUnderline}
          textAlign={subtitleTextAlign}
          setTextAlign={setSubtitleTextAlign}
        />
      </div>

      {/* Button Settings */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Buttons</h3>
        <TypographySettings
          label="Button Text"
          fontFamily={buttonFontFamily}
          setFontFamily={setButtonFontFamily}
          fontSize={buttonFontSize}
          setFontSize={setButtonFontSize}
          bold={buttonBold}
          setBold={setButtonBold}
          italic={buttonItalic}
          setItalic={setButtonItalic}
          underline={buttonUnderline}
          setUnderline={setButtonUnderline}
          showTextAlign={false} // Text align is not typically needed for buttons
        />
        <ColorPicker
          label="Button Background"
          color={buttonBackground}
          onChange={(e) => setButtonBackground(e.target.value)}
        />
      </div>
    </div>
      )
    },
    {
      title: "Titles",
      content: (
        <div className=" p-4 bg-white ">
          <h3 className="text-lg font-bold text-gray-700 mb-4">JOINING STATE</h3>
        {/* Text Inputs */}
      <div className="mt-6">
        <TextInput
          label="Heading Text"
          value={headingText}
          onChange={(e) => setHeadingText(e.target.value)}
        />
        <TextInput
          label="Subtitle Text"
          value={subtitleText}
          onChange={(e) => setSubtitleText(e.target.value)}
        />
        <TextInput
          label="Button Text"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
        />
      </div>
          
        </div>
      ),
    }
  ];

  return (
    <div id="accordion-collapse" data-accordion="collapse" className="w-4/12 bg-white rounded-lg shadow-md">
      {data.map((item, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${index + 1}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  dark:text-gray-400  gap-3 rounded-t-lg"
              data-accordion-target={`#accordion-collapse-body-${index + 1}`}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${index + 1}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-light text-lg truncate text-black">{item.title}</span>

              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === index ? 'rotate-180' : ''} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index + 1}`}
            className={`${activeIndex === index ? '' : 'hidden'}`}
            aria-labelledby={`accordion-collapse-heading-${index + 1}`}
          >
            <div className="p-5 border border-b-0 border-gray-200">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
