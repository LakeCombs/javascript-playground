//method1
const reverseString =(str) => {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'enter a valid string that is more than one character long'
  }

  const backwards = [];
  const itemNumber = str.length -1;
  for (let index = itemNumber; index >= 0; index--) {
     backwards.push(str[index]); 
  }
  console.log(backwards.join(''))
  return backwards.join("")
 
}


//method2
const  reverse2 = (str) => {
  return str.split('').reverse().join('')
}

//method3 
const reverse3 =(str) => {
  retrun [...str].reverse().join('')
  
}


reverseString("lake combs")

reverse2("lake combs super hero")

reverse3("hey what's up over there")
