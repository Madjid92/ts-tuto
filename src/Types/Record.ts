interface ICatInfo {
    age : number,
    breed: string
  };
 
  type CatNameType3 = 'douda'|'doran'|'barghod';
  type CatNameType2 = 'doran';
 
  type t1 = Record < CatNameType2, ICatInfo>
  type t2 =  Partial<Record<CatNameType3,ICatInfo>>
  type t3 =  t1 &t2;
 
  const test10: t3 = {
    'douda': {age:15,breed:'Marroco'},
    'doran': {age:45, breed:'Tom'},
    //'barghod': {age:31, breed: 'Taupa'}
  };

  console.log(test10)