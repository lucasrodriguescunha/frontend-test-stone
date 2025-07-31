import { useState, useEffect } from 'react';
import { getUSDToBRL, CurrencyData } from '../services/awesomeAPI';

export interface UseCurrencyReturn {
  currencyData: CurrencyData | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

export const useCurrency = (): UseCurrencyReturn => {
  const [currencyData, setCurrencyData] = useState<CurrencyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrencyData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUSDToBRL();
      setCurrencyData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    await fetchCurrencyData();
  };

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  return {
    currencyData,
    loading,
    error,
    refreshData,
  };
};
