import {db} from '../firebaseConfig'


export async function upVotes(postID,newUpVotesArr) {
        return await db.collection('posts').doc(postID).update({
        upvotes: newUpVotesArr
    })
}

export async function downVotes(postID,newDownVotesArr) {
    return await db.collection('posts').doc(postID).update({
        downvotes: newDownVotesArr
    })
}