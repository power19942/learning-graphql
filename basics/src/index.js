import { GraphQLServer } from "graphql-yoga"

//type || application schema
const typeDefs = `
    type Query {
        greeting(name:String):String!
        grades:[Int]!
        me: User!
        posts(query:String):[Post!]!
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
        posts(_, args) {
            let users = [{
                    id: 1,
                    title: "post",
                    body: "some text"
                },
                {
                    id: 1,
                    title: "post",
                    body: "some text"
                },
                new Post(2, "class post", "from class")
            ]
            return args.query == null ? users :
                users.filter(post => post.title.toLowerCase().includes(args.query))
        },
        // graphql pass 4 arguments parent,args,context,info
        greeting(_, args) {
            return `welcome ${args.name}`
        },

        grades(parent, args, context, info) {
            return [10, 12, 20, 30]
        }
    }
}

class Post {
    constructor(id, title, body) {
        this.id = id
        this.title = title
        this.body = body
    }
}
const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log("server running"))