import React from 'react';

const ColorPicker = ({ label, color, onChange }) => (
  <div className="flex items-center justify-between mb-4">
    <label className="text-gray-500 font-medium text-sm">{label}</label>
    <div className="flex items-center gap-2">
      <input
        type="color"
        value={color}
        onChange={onChange}
        className="w-12 h-6 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        value={color}
        onChange={onChange}
        className="w-20 h-6 border border-gray-300 rounded-md px-2"
      />
    </div>
  </div>
);

export default ColorPicker;
