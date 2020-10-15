import {db} from '../firebaseConfig'


export async function upVotes(postID,upVote) {
        return await db.collection('posts').doc(postID).update({
        upvotes:upVote,
    })
}

export async function downVotes(postID,downVote) {
    return await db.collection('posts').doc(postID).update({
        downvotes: downVote
    })
}