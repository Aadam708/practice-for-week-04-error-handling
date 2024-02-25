// 1.
function sum(array) {
  try{
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  catch(error){
    console.error('not an array type so a type error')
  }
}

let res = sum(null);


console.log(res);

// 2.
// tests

/**
 * Prints the given name.
 * @param {string} name - The name to be printed.
 */
const sayName = name =>{

  try{
    if(typeof name !==  'string') throw Error('name is not a string')
    else console.log(name)
  }

  catch(error){
    console.log(error.message)
  }

}

sayName("Alex");
sayName(1);
// Your code here




// 3.
function greet(greeting) {
  try{
    if (greeting.includes('loser')) {
      throw new Error("There was no greeting given you bad boy being rude.");
    }
    console.log(greeting);

  }
  catch(error){
    console.error("Error: "+error.message);
  }

}
greet("hello bob u loser");
greet('hi dave im your friend catch my pokemon xyz pls')
