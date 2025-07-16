
import React from 'react';
import { formatCurrency } from '../utils/formatters'; 

interface DetailRowProps {
  label: string;
  value: number;
  isNegative?: boolean; 
  isBold?: boolean; 
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value, isNegative, isBold }) => {
  const valueColorClass = isNegative ? 'text-red-600' : 'text-gray-900';
  const valueFontWeightClass = isBold ? 'font-bold' : 'font-semibold';

  return (
    <div className="flex justify-between items-center bg-gray-50 p-2 sm:p-3 rounded-md shadow-sm">
      <span className="text-gray-600">{label}:</span>
      <span className={`${valueColorClass} ${valueFontWeightClass}`}>
        {formatCurrency(value)}
      </span>
    </div>
  );
};

export default DetailRow;
