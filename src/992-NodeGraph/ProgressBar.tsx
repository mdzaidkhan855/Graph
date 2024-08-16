import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6">
        
        
            <div
                className="bg-blue-500 h-full rounded-full text-xs font-medium text-blue-100 text-center"
                style={{ width: `${percentage}%` }}
            >
                
            </div>
           
        
      
    </div>
  );
};

export default ProgressBar;
