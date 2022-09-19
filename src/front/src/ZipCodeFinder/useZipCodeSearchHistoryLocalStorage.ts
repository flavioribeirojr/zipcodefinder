import { ZipCodeInfo } from './zipcode-finder.service';

const STORAGE_KEY = 'ZIP_CODE_HISTORY';

export function useZipCodeSearchHistoryLocalStorage() {
    function updateStorage(history: ZipCodeInfo[]) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }

    function getFromStorage() {
        const historyJSON = localStorage.getItem(STORAGE_KEY);

        if (!historyJSON) {
            return [];
        }

        return JSON.parse(historyJSON) as ZipCodeInfo[];
    }

    return {
        updateStorage,
        getFromStorage
    };
}