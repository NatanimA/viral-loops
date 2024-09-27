import React from 'react';

const TypographySettings = ({
  label,
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  bold,
  setBold,
  italic,
  setItalic,
  underline,
  setUnderline,
  textAlign,
  setTextAlign,
  showTextAlign = true,
  color,
  setColor,
}) => {
  const fontFamilies = [
    { name: "Sans", class: "font-sans" },
    { name: "Serif", class: "font-serif" },
    { name: "Mono", class: "font-mono" },
    { name: "Arial", class: "font-arial" },
    { name: "Times New Roman", class: "font-custom" },
    { name: "Georgia", class: "font-georgia" },
    { name: "Helvetica", class: "font-helvetica" },
    { name: "Verdana", class: "font-verdana" },
    { name: "Courier", class: "font-mono" },
    { name: "Cursive", class: "font-cursive" },
    { name: "Impact", class: "font-impact" },
    { name: "Palatino", class: "font-palatino" },
    { name: "Tahoma", class: "font-tahoma" },
    { name: "Comic Sans", class: "font-comic" },
    { name: "Arvo", class: "font-arvo" },
    { name: "Droid Sans", class: "font-droid" },
    { name: "Montserrat", class: "font-montserrat" },
    { name: "Open Sans", class: "font-openSans" },
    { name: "Roboto", class: "font-roboto" },
    { name: "Oswald", class: "font-oswald" },
    { name: "Cabin", class: "font-cabin" },
    { name: "Poppins", class: "font-poppins" },
    { name: "Lora", class: "font-lora" },
    { name: "Raleway", class: "font-raleway" },
    { name: "Dosis", class: "font-dosis" },
  ];

  const fontSizes = [
    { size: "12px", class: "text-xs" },
    { size: "14px", class: "text-sm" },
    { size: "16px", class: "text-base" },
    { size: "18px", class: "text-lg" },
    { size: "20px", class: "text-xl" },
    { size: "24px", class: "text-2xl" },
    { size: "30px", class: "text-3xl" },
    { size: "36px", class: "text-4xl" },
    { size: "48px", class: "text-5xl" },
  ];

  return (
    <div className="mt-6">
      <label className="text-gray-500 font-medium text-sm mb-2 block">{label}</label>
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <select
          className="border border-gray-300 rounded-md p-2 flex-1"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          {fontFamilies.map((family,index) => (
            <option key={index} value={family.class}>
              {family.name}
            </option>
          ))}
        </select>
        <select
          className="border border-gray-300 rounded-md p-2 flex-1"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        >
          {fontSizes.map((size,index) => (
            <option key={index} value={size.class}>
              {size.size}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2 mb-4">
      <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border border-gray-300 rounded-md h-10 w-10"
        />
        <button
          className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md font-bold ${bold ? 'bg-gray-300' : ''}`}
          onClick={() => setBold(!bold)}
        >
          B
        </button>
        <button
          className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md italic ${italic ? 'bg-gray-300' : ''}`}
          onClick={() => setItalic(!italic)}
        >
          i
        </button>
        <button
          className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md underline ${underline ? 'bg-gray-300' : ''}`}
          onClick={() => setUnderline(!underline)}
        >
          U
        </button>
        {showTextAlign && (
          <button
            className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md ${textAlign ? 'bg-gray-300' : ''}`}
            onClick={() => setTextAlign(!textAlign)}
          >
            C
          </button>
        )}
      </div>
     
    </div>
  );
};

export default TypographySettings;
