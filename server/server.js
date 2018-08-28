import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';

const app = express();

const apolloServer = new ApolloServer({
    schema,
    playground: {
        settings: {
            'editor.cursorShape': 'line'
        }
    }
});

apolloServer.applyMiddleware({ app });

app.listen(4000, () => console.log('Listening to port 4000'));
