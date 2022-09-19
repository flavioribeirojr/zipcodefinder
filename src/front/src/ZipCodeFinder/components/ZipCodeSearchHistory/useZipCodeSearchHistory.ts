import { useContext } from 'react';
import { ZipCodeSearchHistoryContext } from '../../zip-code-search-history.context';

export function useZipCodeSearchHistory() {
  const { history, setHistory } = useContext(ZipCodeSearchHistoryContext);

  function clearHistory() {
    setHistory([]);
  }

  function removeZipCode(zipCode: string) {
    const filteredHistory = history.filter(zipCodeInfo => zipCodeInfo.zipCode !== zipCode);

    setHistory(filteredHistory);
  }

  return {
    clearHistory,
    removeZipCode
  };
}