import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject
} from '@apollo/client';

const client : ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: process.env.URL || 'https://backend-chuck-norris.uc.r.appspot.com/graphql',
    cache: new InMemoryCache()
});

export default client;
