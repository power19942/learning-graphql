const Comment = {
    //no need for manual relations becuse of prisma and using of info argument in  query.js
    // author(parent, args, { db }, info) {
    //     return db.users.find((user) => {
    //         return user.id === parent.author
    //     })
    // },
    // post(parent, args, { db }, info) {
    //     return db.posts.find((post) => {
    //         return post.id === parent.post
    //     })
    // }
}
export default Comment