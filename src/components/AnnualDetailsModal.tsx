import type { CalculationResults } from "../types";
import { formatCurrency } from "../utils/formatters";

interface AnnualDetailsModalProps {
  results: CalculationResults;
  isOpen: boolean;
  onClose: () => void;
}

const AnnualDetailsModal: React.FC<AnnualDetailsModalProps> = ({ results, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold rounded-full p-2"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Detalles Anuales</h3>
        <div className="grid grid-cols-1 gap-4 text-lg">
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
            <span className="text-gray-600">Salario Bruto Anual:</span>
            <span className="text-gray-900 font-semibold">{formatCurrency(results.grossSalaryAnnual)}</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
            <span className="text-gray-600">Aportes AFP Anual:</span>
            <span className="text-red-600 font-semibold">{formatCurrency(results.afpAnnual)}</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
            <span className="text-gray-600">Aportes SFS Anual:</span>
            <span className="text-red-600 font-semibold">{formatCurrency(results.sfsAnnual)}</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
            <span className="text-gray-600">Ingreso Neto Imponible Anual:</span>
            <span className="text-gray-900 font-semibold">{formatCurrency(results.taxableIncomeAnnual)}</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-md">
            <span className="text-gray-600 font-medium">ISR Anual Calculado:</span>
            <span className="text-red-600 font-bold">{formatCurrency(results.isrAnnual)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualDetailsModal;