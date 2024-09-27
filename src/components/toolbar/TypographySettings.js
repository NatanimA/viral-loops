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
}) => {
  const fontFamilies = [
    { name: "Sans", class: "font-sans" },
    { name: "Serif", class: "font-serif" },
    { name: "Mono", class: "font-mono" },
    { name: "Arial", class: "font-arial" },
    { name: "Times New Roman", class: "font-times" },
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
      <div className="flex items-center gap-2 mb-4">
        <select
          className="border border-gray-300 rounded-md p-2"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          {fontFamilies.map((family) => (
            <option key={family.class} value={family.class}>
              {family.name}
            </option>
          ))}
        </select>
        <select
          className="border border-gray-300 rounded-md p-2"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        >
          {fontSizes.map((size) => (
            <option key={size.class} value={size.class}>
              {size.size}
            </option>
          ))}
        </select>
        <input
          type="color"
          className="w-12 h-10 border border-gray-300 rounded-md"
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
