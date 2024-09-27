import React from 'react';

const TextInput = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-500 font-medium text-sm mb-2">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md p-2"
    />
  </div>
);

export default TextInput;
