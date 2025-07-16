import React, { useState, useMemo } from 'react';
import CalculatorForm from './components/CalculatorForm';
import CalculationResultsDisplay from './components/CalculationResultsDisplay';
import AnnualDetailsModal from './components/AnnualDetailsModal';
import InfoNote from './components/InfoNote';
import { calculateISR } from './types/calculations';

const App: React.FC = () => {
  const [grossSalaryInput, setGrossSalaryInput] = useState<string>('');
  const [otherDeductionsInput, setOtherDeductionsInput] = useState<string>('');
  const [showAnnualModal, setShowAnnualModal] = useState<boolean>(false);

  const results = useMemo(() => {
    const parsedGrossSalary = parseFloat(grossSalaryInput) || 0;
    const parsedOtherDeductions = parseFloat(otherDeductionsInput) || 0;
    return calculateISR(parsedGrossSalary, parsedOtherDeductions);
  }, [grossSalaryInput, otherDeductionsInput]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 flex items-center justify-center p-4 font-inter">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-3xl transform transition-all duration-500 hover:scale-[1.01] border-4 border-white border-opacity-20 backdrop-filter backdrop-blur-sm">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 leading-tight">
          ISR <span className="text-purple-600">Calculator</span> DR
        </h1>

        <CalculatorForm
          grossSalaryInput={grossSalaryInput}
          setGrossSalaryInput={setGrossSalaryInput}
          otherDeductionsInput={otherDeductionsInput}
          setOtherDeductionsInput={setOtherDeductionsInput}
        />

        <CalculationResultsDisplay results={results} onShowAnnualDetails={() => setShowAnnualModal(true)} />

        <AnnualDetailsModal
          results={results}
          isOpen={showAnnualModal}
          onClose={() => setShowAnnualModal(false)}
        />

        <InfoNote />
      </div>
    </div>
  );
};

export default App;
