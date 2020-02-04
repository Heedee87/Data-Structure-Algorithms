//Create a frunction that reverses a string:
//"Hi My name is Andrei" should be:
//"ierdnA si eman yM iH"


const reverse = str =>{
  // let split = str.split(" ");
  const newStr = [];
  
  for(let i=str.length;i >= 0; i--){
    // console.log(str[i])
    newStr.push(str[i])
  }
  // const newStr = str.split(" ").reverse().join(" ");

  //console.log(newStr.join(" "))
  return newStr.join("");
}


//----Solution Example----

function reverse1(str) {
  //check input
  if(!str || str.length < 2 || typeof str !== "string"){
    return "hmmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }

  return backwards.join("");

}

function reverse2(str){
  return str.split("").reverse().join("");
}

const reverse3 = str => str.split("").reverse().join("");

const reverse4 = str => [...str].reverse().join("");


module.exports = {
  reverse,
  reverse1,
  reverse2,
  reverse3,
  reverse4
};