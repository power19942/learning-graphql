import prisma from "../prisma"

const Query = {
    users(parent, args, { db, prisma }, info) {
        //let users = prisma.query.users(null, null /*null will return all fields without relations*/ )
        const opArgs = {}

        if (args.query) {
            opArgs.AND = [{
                name_contains: args.query
            }, {
                email_contains: args.query
            }]
        }
        return prisma.query.users(opArgs, info)

        // if (!args.query) {
        //     return db.users
        // }

        // return db.users.filter((user) => {
        //     return user.name.toLowerCase().includes(args.query.toLowerCase())
        // })
    },
    posts(parent, args, { db }, info) {
        return prisma.query.posts(null, info)
    },
    comments(parent, args, { prisma }, info) {
        return prisma.query.comments(null, info)
    },
    me() {
        return {
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com'
        }
    },
    post() {
        return {
            id: '092',
            title: 'GraphQL 101',
            body: '',
            published: false
        }
    }
}

export default Query