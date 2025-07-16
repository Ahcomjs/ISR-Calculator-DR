import type { CalculationResults } from "../types";
import { formatCurrency } from "../utils/formatters";

interface CalculationResultsDisplayProps {
  results: CalculationResults;
  onShowAnnualDetails: () => void;
}

const CalculationResultsDisplay: React.FC<CalculationResultsDisplayProps> = ({
  results,
  onShowAnnualDetails,
}) => (
  <div className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Resultados del Cálculo</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col justify-center items-center bg-white p-5 rounded-lg shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105">
        <span className="text-gray-600 font-medium mb-1">Salario Bruto Mensual:</span>
        <span className="text-gray-900 font-extrabold text-2xl">{formatCurrency(results.grossSalaryMonthly)}</span>
      </div>

      <div className="flex flex-col justify-center items-center bg-white p-5 rounded-lg shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105">
        <span className="text-gray-600 font-medium mb-1">Deducción AFP (2.87%):</span>
        <span className="text-red-600 font-extrabold text-2xl">{formatCurrency(results.afpMonthly)}</span>
      </div>

      <div className="flex flex-col justify-center items-center bg-white p-5 rounded-lg shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105">
        <span className="text-gray-600 font-medium mb-1">Deducción SFS (3.04%):</span>
        <span className="text-red-600 font-extrabold text-2xl">{formatCurrency(results.sfsMonthly)}</span>
      </div>

      <div className="flex flex-col justify-center items-center bg-white p-5 rounded-lg shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105">
        <span className="text-gray-600 font-medium mb-1">ISR Mensual:</span>
        <span className="text-red-600 font-extrabold text-2xl">{formatCurrency(results.isrMonthly)}</span>
      </div>

      <div className="flex flex-col justify-center items-center bg-white p-5 rounded-lg shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105">
        <span className="text-gray-600 font-medium mb-1">Otros Descuentos:</span>
        <span className="text-red-600 font-extrabold text-2xl">{formatCurrency(results.otherDeductionsMonthly)}</span>
      </div>

      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-lg shadow-xl col-span-1 sm:col-span-2 transition-transform duration-300 hover:scale-105">
        <span className="font-bold text-2xl mb-2">Salario Neto Mensual:</span>
        <span className="font-extrabold text-4xl">{formatCurrency(results.netSalaryMonthly)}</span>
      </div>
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