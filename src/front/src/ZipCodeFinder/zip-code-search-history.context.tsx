import { createContext, useEffect, useState } from 'react';
import { useZipCodeSearchHistoryLocalStorage } from './useZipCodeSearchHistoryLocalStorage';
import { ZipCodeInfo } from './zipcode-finder.service';

export const ZipCodeSearchHistoryContext = createContext<ZipCodeSearchHistory>({
  history: [],
  setHistory: () => void 0
});

export function ZipCodeSearchHistoryContextProvider(props: ZipCodeSearchHistoryContextProviderProps) {
  const zipCodeSearchHistoryLocalStorage = useZipCodeSearchHistoryLocalStorage();
  const [ history, setHistory ] = useState<ZipCodeInfo[]>([]);

  useEffect(() => {
    setHistory(zipCodeSearchHistoryLocalStorage.getFromStorage());
  }, []);

  function setHistoryAndSaveToStorage(history: ZipCodeInfo[]) {
    const last5ZipCodeSearchHistory = Array
      .from(history)
      .slice(-5);

    setHistory(last5ZipCodeSearchHistory);
    zipCodeSearchHistoryLocalStorage.updateStorage(last5ZipCodeSearchHistory);
  }

  return (
    <ZipCodeSearchHistoryContext.Provider value={{ history, setHistory: setHistoryAndSaveToStorage }}>
      { props.children }
    </ZipCodeSearchHistoryContext.Provider>
  );
}

interface ZipCodeSearchHistoryContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface ZipCodeSearchHistory {
  history: ZipCodeInfo[];
  setHistory: (history: ZipCodeInfo[]) => any
}