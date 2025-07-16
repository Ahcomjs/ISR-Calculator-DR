export const formatCurrency = (value: number): string => {
  return value.toLocaleString('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};