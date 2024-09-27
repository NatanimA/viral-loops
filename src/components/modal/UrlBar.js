import React, { useState, useRef } from 'react';
import { API } from '../../constants';
import { useSelector } from 'react-redux';
import copy from 'copy-to-clipboard';

const UrlBar = () => {
    const [copied, setCopied] = useState(false);
    const tooltipRef = useRef(null);
    const defaultIconRef = useRef(null);
    const successIconRef = useRef(null);
    const clientHost = API.CLIENT_HOST
    const previewId = useSelector(state => state.accordion.previewId)

    const handleCopy = () => {
        const textToCopy = clientHost + "/preview/" + previewId;
        copy(textToCopy);
        showSuccess();
        setTimeout(resetToDefault, 2000);
    };
    

    const showSuccess = () => {
        setCopied(true);
        if (tooltipRef.current) tooltipRef.current.classList.remove('invisible');
    };

    const resetToDefault = () => {
        setCopied(false);
        if (tooltipRef.current) tooltipRef.current.classList.add('invisible');
    };

    return (
        <div className="w-full  bg-white shadow-md rounded-lg p-4">
            <div className="mb-2 flex justify-between items-center">
                <label htmlFor="website-url" className="text-sm font-medium text-gray-900">Preview your Layout:</label>
            </div>
            <div className="flex items-center">
                <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg">URL</span>
                <div className="relative w-full">
                    <input 
                        id="website-url" 
                        type="text" 
                        className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        value={clientHost +"/preview/"+previewId}
                        readOnly 
                        disabled 
                    />
                </div>
                <button 
                    onClick={handleCopy} 
                    className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border border-blue-700 hover:border-blue-800" 
                    type="button"
                >
                    <span ref={defaultIconRef} className={`inline-flex items-center ${copied ? 'hidden' : ''}`}>
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </span>
                    <span ref={successIconRef} className={`inline-flex items-center ${!copied ? 'hidden' : ''}`}>
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                </button>
                <div 
                    ref={tooltipRef} 
                    role="tooltip" 
                    className={`absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip`}
                >
                    {copied ? (
                        <span>✅ Copied! </span>
                    ) : (
                        <span>📋 Copy link</span>
                    )}
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">Your URL has been successfully created! 🎉</p>
        </div>
    );
};

export default UrlBar;
