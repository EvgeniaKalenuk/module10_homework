let x = +prompt('Введите значение')
if(isNaN(x) || typeof(x) !== 'number'){
console.log('Упс, кажется, вы ошиблись')
} else if(x % 2 === 0){
    console.log('Четное')
}else {
  console.log('Нечетное')
}