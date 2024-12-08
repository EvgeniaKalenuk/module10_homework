let map = new Map([
    ['sun', 'yellow'],
    ['frog', 'green'], 
    ['tomato', 'red']
  ])
  
  for (let color of map.keys()){
    console.log(`Ключ - ${color}, значение - ${map.get(color)}`)
  }