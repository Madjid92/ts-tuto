const p = () => {
    let i = 0;
    return new Promise(
      (resolve) => {
        setTimeout(() => resolve(i++), 1000)
      }
    )
 
  }
 
  const foo = async function* () {
    const pr = p();
    while(true){
      const val = await pr;
      console.log(val)
      yield val
    }
  };
 
 
  while(true){
     foo().next().then(e => console.log(e))
  }