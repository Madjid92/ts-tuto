type A = Awaited<Promise<number>>;
 const t3 = new Promise<number>((resolve,reject)=>{
         let counter = 0;
         const i = setInterval(()=>{
             console.log("in interval........")
             if (counter === 5){
                 clearInterval(i)
                 resolve(counter)
                 return 
             }
             counter ++
         },1000)
     })

 type c = typeof t3;
 type b1 = Awaited<c>

 t3.then(( r : b1 ) => {
     const v : A = 1
     console.log(v)
     console.log(r)
 })