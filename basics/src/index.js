import { GraphQLServer } from "graphql-yoga"

//type || application schema
const typeDefs = `
    type Query {
        hello:String!
    }
`
    //resolvers

const resolvers = {
    Query: {
        hello: () => {
            return "Hello omar"
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log("server running"))