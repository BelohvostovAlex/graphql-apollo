import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql-weather-api.herokuapp.com/',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
