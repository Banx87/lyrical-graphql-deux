import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './style/style.css';



import App from './components/App';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <App/>
      </Router>
    </ApolloProvider>
    )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
