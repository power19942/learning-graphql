const User = {
    //no need for manual relations becuse of prisma and using of info argument in  query.js
    // posts(parent, args, { db }, info) {
    //     return db.posts.filter((post) => {
    //         return post.author === parent.id
    //     })
    // },
    // comments(parent, args, { db }, info) {
    //     return db.comments.filter((comment) => {
    //         return comment.author === parent.id
    //     })
    // }
}

export default User