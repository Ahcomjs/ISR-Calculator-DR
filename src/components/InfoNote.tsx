const InfoNote: React.FC = () => (
  <p className="text-center text-gray-700 text-sm mt-10 p-4 bg-yellow-50 rounded-lg border border-yellow-200 shadow-inner">
    <span className="font-bold text-yellow-800">Nota Importante:</span> Las tablas de ISR utilizadas corresponden al año 2024. Esta calculadora
    <span className="font-bold"> no considera los topes cotizables</span> para AFP y SFS.
    Para un cálculo oficial y preciso, siempre consulte las fuentes de la Dirección General de Impuestos Internos (DGII) y la Tesorería de la Seguridad Social (TSS) de la República Dominicana.
  </p>
);

export default InfoNote;