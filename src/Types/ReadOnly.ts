
interface Todo1 {
    title: string;
  };
 
  const test5: Readonly<Todo1> = {title:"dont touch"};
 
 //@NOTE cans't do this test.title = 'sdcsd'
 console.log(test5)

 
 interface ICatInfo {
    age : number,
    breed: string
  };
 
  type CatNameType = 'douda'|'doran'|'barghod';
 
  const test8: Readonly <Partial<Record<CatNameType,ICatInfo>>> = {
    'douda': {age:15,breed:'Marroco'},
    'doran': {age:45, breed:'Tom'},
    'barghod': {age:31, breed: 'Taupa'}
  };

  console.log(test8)