import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterSetup from './pages/RouterSetup';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById( 'root' ) as HTMLElement
);

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterSetup />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
