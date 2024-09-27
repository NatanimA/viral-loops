import React from 'react';

const Toggle = ({ label, isChecked, onToggle }) => (
  <div className="flex items-center justify-between mb-4">
    <label className="text-gray-500 font-medium text-sm">
      {label} <span className="text-red-500">*</span>
    </label>
    <button
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`}
      onClick={onToggle}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? 'translate-x-6' : ''}`}
      ></div>
    </button>
  </div>
);

export default Toggle;
