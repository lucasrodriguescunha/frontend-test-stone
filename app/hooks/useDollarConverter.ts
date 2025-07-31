function calculateTotals(value: number, stateTax: number, rate: number, method: 'cash' | 'card') {
  const iof = method === 'cash' ? 0.011 : 0.064;
  const dollarWithTax = value + value * stateTax;
  const real = method === 'cash'
    ? dollarWithTax * (rate + rate * iof)
    : (dollarWithTax + dollarWithTax * iof) * rate;

  return {
    iof,
    dollarWithTax,
    real
  };
}