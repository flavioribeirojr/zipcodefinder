import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GraphqlClient } from './services/graphql-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={GraphqlClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
