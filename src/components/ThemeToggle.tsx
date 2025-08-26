import React from 'react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default ThemeToggle;
