import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { ZipCodeFinderForm } from './components/ZipCodeFinderForm/ZipCodeFinderForm';
import { ZipCodeSearchHistoryContextProvider } from './zip-code-search-history.context';
import { ZipCodeSearchHistory } from './components/ZipCodeSearchHistory/ZipCodeSearchHistory';

export function ZipCodeFinder() {
  return (
    <ZipCodeSearchHistoryContextProvider>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ZipCodeFinder
          </Typography>
        </Toolbar>
      </AppBar>
      <ZipCodeFinderForm />
      <ZipCodeSearchHistory />
    </ZipCodeSearchHistoryContextProvider>
  );
}