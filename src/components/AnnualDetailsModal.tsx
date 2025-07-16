import React from 'react';
import type { CalculationResults } from '../types';
import DetailRow from './DetailRow';

interface AnnualDetailsModalProps {
  results: CalculationResults;
  isOpen: boolean;
  onClose: () => void;
}

const AnnualDetailsModal: React.FC<AnnualDetailsModalProps> = ({ results, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-lg relative transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold rounded-full p-2"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Detalles Anuales</h3>
        <div className="grid grid-cols-1 gap-4 text-lg">
          <DetailRow
            label="Salario Bruto Anual"
            value={results.grossSalaryAnnual}
          />
          <DetailRow
            label="Aportes AFP Anual"
            value={results.afpAnnual}
            isNegative={true}
          />
          <DetailRow
            label="Aportes SFS Anual"
            value={results.sfsAnnual}
            isNegative={true}
          />
          <DetailRow
            label="Ingreso Neto Imponible Anual"
            value={results.taxableIncomeAnnual}
          />
          <DetailRow
            label="ISR Anual Calculado"
            value={results.isrAnnual}
            isNegative={true}
            isBold={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnualDetailsModal;
