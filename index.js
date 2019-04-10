function findMinAndRemove(array){
  let min = array[0]
  let mindex = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] < min){
      min = array[i]
      mindex = i
    }
  }
  array.splice(mindex, 1)
  return min
}

function insertionSort(array){
  let newMin
  let sorted = []
  while (array.length != 1){
    let newMin = findMinAndRemove(array)
    sorted.push(newMin)
  } 
}
