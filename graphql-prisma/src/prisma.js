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

// prisma.mutation.createPost({
//     data: {
//         title: "another prisma post",
//         body: "Empty",
//         published: false,
//         author: {
//             connect: {
//                 id: "ck3yvj8cc00200761mktr8z6z"
//             }
//         }
//     }
// }, `
// {
//     id
//     title
//     body
//     published
//     author {
//       id
//       name
//     }
//   }
// `).then(data => console.log(JSON.stringify(data, undefined, 2)))
prisma.exists.Comment({
    id: 'ck407dis6000m0761xw0lra42',
    author: {
        id: 'ck3yvj8cc00200761mktr8z6z'
    }
}).then(res => console.log(res))

const createpostForUser = async(authorId, data) => {
    const userExists = await prisma.exists.User({
        id: 'ck3yvj8cc00200761mktr8z6z'
    })

    if (!userExists) {
        throw new Error("user not found")
    }
    const post = await prisma.mutation.createPost({
        data: {
            ...data,
            author: {
                connect: {
                    id: authorId
                }
            }
        }
    }, `
    {
        id
        title
    }`)

    const user = await prisma.query.user({
        where: {
            id: authorId
        }
    }, `
        {
            name
            email
            posts{
                id
                title
                published
            }
        }
    `)

    return user
}

/*createpostForUser('ck3yvj8cc00200761mktr8z6z', {
        title: 'greate book',
        body: 'should read this book',
        published: true
    }).then(user => console.log(JSON.stringify(user, undefined, 2)))
    .catch(err => console.log('error', err))*/