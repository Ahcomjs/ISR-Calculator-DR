import React from 'react';

interface CalculatorFormProps {
  grossSalaryInput: string;
  setGrossSalaryInput: (value: string) => void;
  onShowOtherDeductions: () => void;
  otherDeductionsValue: string;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  grossSalaryInput,
  setGrossSalaryInput,
  onShowOtherDeductions,
  otherDeductionsValue,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
    <div>
      <label htmlFor="grossSalary" className="block text-gray-800 font-semibold mb-2 sm:mb-3">
        Salario Bruto Mensual (RD$)
      </label>
      <input
        type="number"
        id="grossSalary"
        className="w-full p-2 sm:p-3 border-2 border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 shadow-md transition-all duration-300 hover:border-purple-400"
        placeholder="Ej: 50,000.00"
        value={grossSalaryInput}
        onChange={(e) => setGrossSalaryInput(e.target.value)}
        min="0"
      />
    </div>
    <div className="flex flex-col justify-end">
      <label htmlFor="otherDeductionsBtn" className="block text-gray-800 font-semibold mb-2 sm:mb-3">
        Otros Descuentos Mensuales
      </label>
      <button
        id="otherDeductionsBtn"
        onClick={onShowOtherDeductions}
        className="w-full p-2 sm:p-3 bg-blue-500 text-white font-bold rounded-xl shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {otherDeductionsValue === '0' ? 'Añadir Descuentos' : `Editar: RD$${parseFloat(otherDeductionsValue).toLocaleString('es-DO')}`}
      </button>
    </div>
  </div>
);

export default CalculatorForm;
