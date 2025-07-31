// Tipos para formulário de conversão
export interface ConversionForm {
  usdAmount: number;
  stateTax: number;
  purchaseType: 'dinheiro' | 'cartao';
}

// Tipos para resultado da conversão
export interface ConversionResult {
  originalAmount: number;
  exchangeRate: number;
  stateTax: number;
  purchaseFee: number;
  convertedAmount: number;
  totalAmount: number;
  purchaseType: 'dinheiro' | 'cartao';
}

// Tipos para componentes
export interface CurrencyInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  value: 'dinheiro' | 'cartao';
  onChange: (value: 'dinheiro' | 'cartao') => void;
  options: Array<{
    value: 'dinheiro' | 'cartao';
    label: string;
  }>;
}

// Re-export dos tipos da API
export type { CurrencyData, AwesomeAPIResponse } from '../services/awesomeAPI';
