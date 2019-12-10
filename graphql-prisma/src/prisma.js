import { Prisma } from "prisma-binding"

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://192.168.99.100:4466'
})

// prisma.query.users(null, '{id name email posts{ id title}}')
//     .then((data) => {
//         console.log(JSON.stringify(data, undefined, 2))
//     })

// prisma.query.comments(null, `
// {
//     id
//     text
// }
// `).then(data => console.log(JSON.stringify(data, undefined, 2)))

// prisma.mutation.createUser(

//         {
//             data: {
//                 name: "omar2",
//                 email: "o@o2.com"
//             }
//         },
//         `{
//             name
//             email
//         }`
//     )
//     .then(data => console.log(JSON.stringify(data, undefined, 2)))

prisma.mutation.createPost({
    data: {
        title: "another prisma post",
        body: "Empty",
        published: false,
        author: {
            connect: {
                id: "ck3yvj8cc00200761mktr8z6z"
            }
        }
    }
}, `
{
    id
    title
    body
    published
    author {
      id
      name
    }
  }
`).then(data => console.log(JSON.stringify(data, undefined, 2)))