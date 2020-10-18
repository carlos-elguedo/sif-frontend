import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';


export const apolloClient = (uri) => {
    return new ApolloClient({
        uri,
        request: operation => {
          operation.setContext({
            /* headers: {
              authorization: `Bearer ${getToken()}`
            } */
          });
        },
        cache: new InMemoryCache()
      });   
}

export default apolloClient;