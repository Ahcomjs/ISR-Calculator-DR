import React from 'react';

interface ResultCardProps {
  label: string;
  value: number;
  isNegative?: boolean; 
  isNetSalary?: boolean; 
  formatCurrency: (value: number) => string; 
}

const ResultCard: React.FC<ResultCardProps> = ({ label, value, isNegative, isNetSalary, formatCurrency }) => {
  const valueColorClass = isNegative ? 'text-red-600' : 'text-white-900';
  const valueSizeClass = isNetSalary ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl';
  const cardBgClass = isNetSalary ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-white';
  const labelColorClass = isNetSalary ? 'text-white' : 'text-gray-600';

  return (
    <div className={`flex flex-col justify-center items-center p-3 sm:p-5 rounded-lg shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105 ${cardBgClass} ${isNetSalary ? 'col-span-1 sm:col-span-2' : ''}`}>
      <span className={`${labelColorClass} font-medium mb-1`}>{label}:</span>
      <span className={`${valueColorClass} font-extrabold ${valueSizeClass}`}>
        {formatCurrency(value)}
      </span>
    </div>
  );
};

export default ResultCard;
