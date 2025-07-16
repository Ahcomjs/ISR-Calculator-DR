import React from 'react';

interface OtherDeductionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  otherDeductionsInput: string;
  setOtherDeductionsInput: (value: string) => void;
}

const OtherDeductionsModal: React.FC<OtherDeductionsModalProps> = ({
  isOpen,
  onClose,
  otherDeductionsInput,
  setOtherDeductionsInput,
}) => {
  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let cleanedValue = value.replace(/[^0-9.]/g, '');
    const parts = cleanedValue.split('.');
    if (parts.length > 2) {
      cleanedValue = parts[0] + '.' + parts.slice(1).join('');
    }
    setOtherDeductionsInput(cleanedValue);
  };

  const handleSaveAndClose = () => {
    if (otherDeductionsInput === '' || isNaN(parseFloat(otherDeductionsInput))) {
      setOtherDeductionsInput('0');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md relative transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold rounded-full p-2"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Otros Descuentos Mensuales</h3>
        <div>
          <label htmlFor="otherDeductions" className="block text-gray-800 font-semibold mb-3">
            Monto (RD$)
          </label>
          <input
            type="text"
            inputMode="decimal"
            id="otherDeductions"
            className="w-full p-2 sm:p-3 border-2 border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 shadow-md transition-all duration-300 hover:border-purple-400"
            placeholder="Ej: 1,000.00"
            value={otherDeductionsInput}
            onChange={handleInputChange}
            min="0"
          />
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleSaveAndClose}
            className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Guardar y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherDeductionsModal;
