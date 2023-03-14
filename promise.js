function updateLastUserActivityTime(UserId){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const CurrentTime =new Date().toISOString();
            console.log(`Updating lastActivityTime for user ${UserId} to ${CurrentTime}`)
            resolve();
            
        }, 1000);
    })
}
const posts=[];
const UserId=123;
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            console.log(`Post created:${JSON.stringify(post)}`);
            resolve();
            
        }, 500);
    })

}
function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const index=posts.indexOf(post);
            if(index!== -1)
         {   posts.splice(index,1);
            console.log(`post deleted:${JSON.stringify(post)}`);
            resolve();
        }else
{
    reject(`post not found:${JSON.stringify(post)}`);
}            
        }, 500);
    })
}
Promise.all([createPost({title:'post 1',body:'Lorem ipsm...',UserId}),updateLastUserActivityTime(UserId),])
.then(([_, lastActivityTime1 ])=>{
    console.log(`frist post created at ${lastActivityTime1}`);
    return Promise.all([createPost({title:'post 2', body:'Lorem ipsm...',UserId}),updateLastUserActivityTime(UserId),])
}).then(([_, lastActivityTime2 ])=>{
    console.log(`frist post created at ${lastActivityTime2}`);
    return Promise.all([createPost({title:'post 3', body:'Lorem ipsm...',UserId}),updateLastUserActivityTime(UserId),])
}).then(([_,lastActivityTime3])=>{
    console.log(`third post created at:${lastActivityTime3}`);
    console.log(`all posts created at:${JSON.stringify(posts)}`)
    return deletePost(post[posts.length-1]);

}).then(()=>{
    console.log(`posts deleted , new set of posts :${JSON.stringify(posts)}`)
}).catch((error)=>{
    console.error(error);
});
