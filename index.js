const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const db = require('./db')
const dotenv = require('dotenv');
const express = require('express')
var cors = require('cors')
const { context } = require('./libs/auth');



const app = express()
app.use(cors())

dotenv.config();

process.env.PWD = process.cwd()

db.connect()

/**
 * SETTING UP APOLLO SERVER
 */
const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
 dataSources: () => {
    return {
      //jarvisAPI: new JarvisAPI(),
     //DATA_SOURCES
    }
  },
  context,
  playground: process.env.SERVER_PLAYGROUND,
});



server.applyMiddleware({
  app,
})


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`🚀  Server ready at ${port}`))


