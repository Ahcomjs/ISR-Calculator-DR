
import type { CalculationResults } from '../types';

/**

 * @param grossSalaryMonthly 
 * @param otherDeductionsMonthly 
 * @returns 
 */
export const calculateISR = (
  grossSalaryMonthly: number,
  otherDeductionsMonthly: number
): CalculationResults => {

  const AFP_RATE = 0.0287;
  const SFS_RATE = 0.0304;


  const afpMonthly = grossSalaryMonthly * AFP_RATE;
  const sfsMonthly = grossSalaryMonthly * SFS_RATE;


  const grossSalaryAnnual = grossSalaryMonthly * 12;
  const afpAnnual = afpMonthly * 12;
  const sfsAnnual = sfsMonthly * 12;


  const taxableIncomeAnnual = grossSalaryAnnual - afpAnnual - sfsAnnual;


  let isrAnnual = 0;

  if (taxableIncomeAnnual <= 416220.00) {
    isrAnnual = 0;
  } else if (taxableIncomeAnnual <= 624329.00) {

    isrAnnual = (taxableIncomeAnnual - 416220.01) * 0.15;
  } else if (taxableIncomeAnnual <= 867123.00) {

    isrAnnual = 31216.00 + (taxableIncomeAnnual - 624329.01) * 0.20;
  } else {

    isrAnnual = 79776.00 + (taxableIncomeAnnual - 867123.01) * 0.25;
  }


  const isrMonthly = isrAnnual / 12;

  const netSalaryMonthly =
    grossSalaryMonthly - afpMonthly - sfsMonthly - isrMonthly - otherDeductionsMonthly;

  return {
    grossSalaryMonthly,
    otherDeductionsMonthly,
    afpMonthly,
    sfsMonthly,
    isrMonthly,
    netSalaryMonthly,
    grossSalaryAnnual,
    afpAnnual,
    sfsAnnual,
    taxableIncomeAnnual,
    isrAnnual,
  };
};
