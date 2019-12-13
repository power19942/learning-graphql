const Post = {
    //no need for manual relations becuse of prisma and using of info argument in  query.js
    // author(parent, args, ctx, info) {
    //     return users.find((user) => {
    //         return user.id === parent.author
    //     })
    // },
    // comments(parent, args, ctx, info) {
    //     return comments.filter((comment) => {
    //         return comment.post === parent.id
    //     })
    // }
}

export default Post