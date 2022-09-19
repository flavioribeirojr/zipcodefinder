import { useContext, useState } from 'react';
import { ZipCodeSearchHistoryContext } from '../../zip-code-search-history.context';
import { useZipcodeFinderService } from '../../zipcode-finder.service';

export function useZipCodeFinderForm() {
    const zipCodeFinderService = useZipcodeFinderService();
    const zipCodeSearchHistoryContext = useContext(ZipCodeSearchHistoryContext);
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ formValues, setFormValues ] = useState({
        zipCode: '',
        countryCode: 'US'
    });

    async function findZipCode() {
        clearErrorMessage();

        if (!formValues.zipCode || !formValues.countryCode) {
            setErrorMessage('Please provide the zip code and the country to proceed');
            return;
        }

        const zipCodeInHistory = zipCodeSearchHistoryContext
            .history
            .find(zipCodeInfo => zipCodeInfo.zipCode === formValues.zipCode);

        if (zipCodeInHistory) {
            setErrorMessage('The given zip code has already been searched');
            return;
        }

        try {
            const zipCodeInfo = await zipCodeFinderService.findZipCode(formValues);
            zipCodeSearchHistoryContext.setHistory([
                ...zipCodeSearchHistoryContext.history,
                zipCodeInfo
            ]);

            setFormValues({
                ...formValues,
                zipCode: ''
            });
        } catch (err) {
            setErrorMessage('The zip code information could not be found');
        }
    }

    function clearErrorMessage() {
        setErrorMessage('');
    }

    return {
        formValues,
        setFormValues,
        findZipCode,
        errorMessage,
        clearErrorMessage
    }
}