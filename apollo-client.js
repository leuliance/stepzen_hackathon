import { ApolloClient, InMemoryCache,ApolloLink } from "@apollo/client";


const endpoint1 = new HttpLink({
    uri: 'https://api.hashnode.com/graphql',
    cache: new InMemoryCache()
});
const endpoint2 = new HttpLink({
    uri: 'endpoint2/graphql',
    cache: new InMemoryCache()
});

//pass them to apollo-client config
export const client = new ApolloClient({
    link: ApolloLink.split(
        operation => operation.getContext().clientName === 'endpoint2',
        endpoint2, //if above 
        endpoint1
    )
});