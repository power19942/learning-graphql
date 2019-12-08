import { GraphQLServer } from "graphql-yoga"

//type || application schema
const typeDefs = `
    type Query {
        greeting(name:String):String!
        grades:[Int]!
        me: User!
        posts(query:String):[Post!]!
        users:[User]!
    }

    type User {
        id:ID!
        name:String!
        email:String!
        age:Int,
        posts:[Post]
    }

    type Post {
        id:ID!
        title:String!
        body:String!
        author:User!
    }
`
    //resolvers

let posts = [{
        id: 1,
        title: "post",
        body: "some text",
        author: '1'
    },
    {
        id: 3,
        title: "post",
        body: "some text",
        author: '2'
    }
]

let users = [{
        id: '1',
        name: "omar",
        email: "o@o.com"
    },
    {
        id: '2',
        name: "mhd",
        email: "m@m.com"
    }
]
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
        users() {
            return users
        },
        posts(_, args) {

            return args.query == null ? posts :
                posts.filter(post => post.title.toLowerCase().includes(args.query))
        },
        // graphql pass 4 arguments parent,args,context,info
        greeting(_, args) {
            return `welcome ${args.name}`
        },

        grades(parent, args, context, info) {
            return [10, 12, 20, 30]
        }
    },
    //resolve relations for Post type
    //this will call for each post when call relation properity
    Post: {
        author(parent, args, context, info) {
            console.log("post running")
            return users.find(user => user.id === parent.author)
        }
    },
    User: {
        posts(parent, args, context, info) {
            console.log("User running")
            return posts.filter(post => post.author === parent.id)
        }
    }
}

class Post {
    constructor(id, title, body, author) {
        this.id = id
        this.title = title
        this.body = body
        this.author = author
    }
}
const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log("server running"))