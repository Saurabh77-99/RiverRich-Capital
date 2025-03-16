import React from 'react';

const ButtonLoader = ({ color = 'green', size = 'default' }) => {
  // Button-appropriate sizes
  const sizeClasses = {
    small: 'w-3 h-3',
    default: 'w-4 h-4',
    large: 'w-5 h-5'
  };

  const colors = {
    green: 'border-green-500 border-t-green-100',
    white: 'border-white border-t-white/30',
    gray: 'border-gray-600 border-t-gray-200'
  };

  return (
    <div 
      className={`inline-block ${sizeClasses[size]}`}
    >
      <div 
        className={`w-full h-full rounded-full border-2 animate-spin ${colors[color]}`}
        style={{ animationDuration: '0.6s' }}
      />
    </div>
  );
};

// Example usage in buttons
const Example = () => {
  return (
    <div className="">
      {/* Regular button with loader */}
      {/* <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        <ButtonLoader color="white" />
        Loading
      </button> */}

      {/* Small button */}
      <button className="inline-flex items-center justify-center text-sm  text-white rounded-md">
        <ButtonLoader color="white" size="small" />
        Backtesting...
      </button>

      {/* Ghost button
      <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-green-500 border border-green-200 rounded-lg hover:bg-green-50">
        <ButtonLoader color="green" />
        Processing
      </button> */}
    </div>
  );
};

export default Example;