import React from 'react';
import type { CalculationResults } from '../types';
import ResultCard from './ResultCard';

const formatCurrency = (value: number): string => {
  return value.toLocaleString('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

interface CalculationResultsDisplayProps {
  results: CalculationResults;
  onShowAnnualDetails: () => void;
}

const CalculationResultsDisplay: React.FC<CalculationResultsDisplayProps> = ({
  results,
  onShowAnnualDetails,
}) => (
  <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl shadow-xl border border-gray-200">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Resultados del Cálculo</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <ResultCard
        label="Salario Bruto Mensual"
        value={results.grossSalaryMonthly}
        formatCurrency={formatCurrency}
      />
      <ResultCard
        label="Deducción AFP (2.87%)"
        value={results.afpMonthly}
        isNegative={true}
        formatCurrency={formatCurrency}
      />
      <ResultCard
        label="Deducción SFS (3.04%)"
        value={results.sfsMonthly}
        isNegative={true}
        formatCurrency={formatCurrency}
      />
      <ResultCard
        label="ISR Mensual"
        value={results.isrMonthly}
        isNegative={true}
        formatCurrency={formatCurrency}
      />
      <ResultCard
        label="Otros Descuentos"
        value={results.otherDeductionsMonthly}
        isNegative={true}
        formatCurrency={formatCurrency}
      />
      <ResultCard
        label="Salario Neto Mensual"
        value={results.netSalaryMonthly}
        isNetSalary={true}
        formatCurrency={formatCurrency}
      />
    </div>

    <div className="mt-8 text-center">
      <button
        onClick={onShowAnnualDetails}
        className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        Ver Detalles Anuales
      </button>
    </div>
  </div>
);

export default CalculationResultsDisplay;
