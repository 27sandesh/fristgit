console.log('person1:shows ticket');
console.log('person2:shows ticket');
const premovie= async () => {
      const promiseWifeBringTicks = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
      })
      const getpopcorn = new Promise((resolve,reject) => resolve(`popcorn`))
      let ticket =await promiseWifeBringTicks;
      let popcorn =await getpopcorn
      let butter = await addButter;
console.log(`husband:i got some${butter} on popcorn`);
let getColdDrinks =await getColdDrinks;
console.log(`i got some ${coldrinks} let go`);
      return ticket;
}
premovie().then((m) => console.log(m));
getpopcorn.then((t)=> console.log(t))
console.log('person4:shows ticket');
console.log('person5:shows ticket');
