function solution(number){
  if(number < 2 ){
    return 0
  }
  let count = 0
  let result = []
  let duplicate = []
  for(let i = 0 ; i < number-1 ; i++){
    count = count + 1;
    if(count % 3 === 0 || count % 5 === 0 ){
      result.push(count)
    };
   } 
    for(let i = 0 ; i < number-1 ; i++){
    count = count + 1;
    if(count % 15 === 0 ){
      duplicate.push(count)
    };
      console.log(result)
      console.log(duplicate)
       return result.filter(x => x != duplicate.includes(x)).reduce((acc,c) => acc + c ,0 )
     }
  }
