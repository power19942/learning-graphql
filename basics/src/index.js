import { GraphQLServer } from "graphql-yoga"

//type || application schema
const typeDefs = `
    type Query {
        me: User!
        post:Post!
    }

    type User {
        id:ID!
        name:String!
        email:String!
        age:Int
    }

    type Post {
        id:ID!
        title:String!
        body:String!
    }
`
    //resolvers

const resolvers = {
    Query: {
        me() {
            return {
                id: 1,
                name: "omar",
                email: "o@o.com",
                age: 20
            }
        },
        post() {
            return {
                id: 1,
                title: "post",
                body: "some text"
            }
        }

    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log("server running"))