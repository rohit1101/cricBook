import {db} from '../firebaseConfig'


export default function votes(id) {
    const updateRef=db.collection('posts').doc(id).update({
        upvote:[],
        downvote:[]
    })
    return updateRef
}