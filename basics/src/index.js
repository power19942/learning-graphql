import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutations'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import User from './resolvers/User'


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Post,
        Comment,
        User
    },
    context: {
        //pass db for each resolver in context argument
        db
    }
})

server.start(() => {
    console.log('The server is up!')
})