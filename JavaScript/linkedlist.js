let temp, prev1;
let head = {
  prev : null,
  value : 0,
  next : null
}

for(let i = 1; i <= 10; ++i){

  if(head.next === null){
    temp = {
      prev : head,
      value : i,
      next : null
    }
    temp.next = temp;
    head.next = temp;
    prev1 = temp;
  }else{
    temp = {
      prev : prev1,
      value : i,
      next : null
    }
    prev1.next = temp;
    prev1 = temp;
  }
}

temp = head;

for( ; 1 ; ){
  console.log(temp.value);
  if(temp.next === null)
    break;
  temp = temp.next;
}