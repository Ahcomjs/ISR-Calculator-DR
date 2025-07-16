import React from 'react';

interface CalculatorFormProps {
  grossSalaryInput: string;
  setGrossSalaryInput: (value: string) => void;
  otherDeductionsInput: string;
  setOtherDeductionsInput: (value: string) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  grossSalaryInput,
  setGrossSalaryInput,
  otherDeductionsInput,
  setOtherDeductionsInput,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
    <div>
      <label htmlFor="grossSalary" className="block text-gray-800 font-semibold mb-3">
        Salario Bruto Mensual (RD$)
      </label>
      <input
        type="number"
        id="grossSalary"
        className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 shadow-md transition-all duration-300 hover:border-purple-400"
        placeholder="Ej: 50,000.00"
        value={grossSalaryInput}
        onChange={(e) => setGrossSalaryInput(e.target.value)}
        min="0"
      />
    </div>
    <div>
      <label htmlFor="otherDeductions" className="block text-gray-800 font-semibold mb-2">
        Otros Descuentos Mensuales (RD$)
      </label>
      <input
        type="number"
        id="otherDeductions"
        className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 shadow-md transition-all duration-300 hover:border-purple-400"
        placeholder="Ej: 1,000.00"
        value={otherDeductionsInput}
        onChange={(e) => setOtherDeductionsInput(e.target.value)}
        min="0"
      />
    </div>
  </div>
);

export default CalculatorForm;