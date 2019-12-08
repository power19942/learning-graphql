import { GraphQLServer } from "graphql-yoga"

//type || application schema
const typeDefs = `
    type Query {
        greeting(name:String):String!
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
        },
        // graphql pass 4 arguments parent,args,context,info
        greeting(_, args) {
            return `welcome ${args.name}`
        }

    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log("server running"))