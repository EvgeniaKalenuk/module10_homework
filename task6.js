const arr = [1, 1, 1, 1, 1];
let check = true;
for (let index = 1; index < arr.length; index++){
  const element = arr[index];
  if (element !== arr[0]){
    check = false
    break
  } 
}
 console.log(check)