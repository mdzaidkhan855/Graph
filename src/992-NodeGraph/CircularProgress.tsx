import React from 'react';

const CircularProgress = ({ progress = 50, size = 100, strokeWidth = 8 }) => {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.max(0, Math.min(progress, 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = ((100 - normalizedProgress) / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg]"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb" // Light gray background stroke
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3b82f6" // Blue color for the progress stroke
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <div className="absolute text-xs font-semibold">
        {progress}%
      </div>
    </div>
  );
};

export default CircularProgress;
