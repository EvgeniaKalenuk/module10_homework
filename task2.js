let x
if (typeof(x)=='number'){
  console.log('Число')
} else if (typeof(x)=='string'){
  console.log('Строка')
} else if (typeof (x)=='boolean'){
  console.log('Логичесткий тип')
} else {
  console.log('Тип x не определён')
}