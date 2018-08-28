import * as React from 'react';
import './index.css';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import Home from './components/Home';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
