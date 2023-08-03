function sum(num1,num2){

    return num1+num2;

}

function calc(num1,num2,callcabk){

    return callcabk(num1,num2);

}

console.log(calc(2,3,sum));

function gretting(name){

    console.log('Hola', name)

}

setTimeout(gretting,2000,'penelope');

const myFunc = () => {

    return 'Log after 2s';
  
  }
  
function execCallback(callback) {
    setTimeout(callback, 2000);
}

execCallback(myFunc);