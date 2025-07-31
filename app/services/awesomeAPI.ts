import axios from 'axios';

// Tipos para a resposta da AwesomeAPI
export interface CurrencyData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export interface AwesomeAPIResponse {
  USDBRL: CurrencyData;
}

// Configuração base da API
const awesomeAPI = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br',
  timeout: 10000,
});

// Função para buscar cotação USD para BRL
export const getUSDToBRL = async (): Promise<CurrencyData> => {
  try {
    const response = await awesomeAPI.get<AwesomeAPIResponse>('/last/USD-BRL');
    return response.data.USDBRL;
  } catch (error) {
    console.error('Erro ao buscar cotação USD-BRL:', error);
    throw new Error('Falha ao buscar dados de cotação');
  }
};

// Função para converter USD para BRL
export const convertUSDToBRL = (
  usdAmount: number,
  exchangeRate: number,
  stateTax: number = 0
): number => {
  const convertedAmount = usdAmount * exchangeRate;
  const taxAmount = convertedAmount * (stateTax / 100);
  return convertedAmount + taxAmount;
};

// Função para calcular taxa adicional baseada no tipo de compra
export const calculatePurchaseFee = (
  amount: number,
  purchaseType: 'dinheiro' | 'cartao'
): number => {
  // Exemplo de taxas diferentes por tipo de compra
  const fees = {
    dinheiro: 0.011, // 1.1% para dinheiro
    cartao: 0.0638,  // 6.38% para cartão
  };

  return amount * fees[purchaseType];
};

export default awesomeAPI;

