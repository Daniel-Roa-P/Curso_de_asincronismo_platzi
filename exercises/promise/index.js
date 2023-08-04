const promise = new Promise(function (resolve, reject){

    resolve('hey!')

});

const cows = 9;

const countCows = new Promise(function(resolve,reject){

    if(cows > 10){
 
        resolve(`we have ${cows} cows on the far,`);

    } else {

        reject("There is no cows in the farm");

    }

});

countCows.then((result)=>{

    console.log(result);

}).catch((error) => {

    console.log(error);

}).finally(() => console.log('Finally'));

export function delay(time, message) {

    const promesa = new Promise(function (resolve, reject) {
  
      if (time > 0) {
  
        window.setTimeout(() => {
          resolve(message);
        },time)
  
      } else {
  
        reject("we cant go back in time");
  
      }
  
    });
  
    return promesa;
  
  }
  
  
  delay(2000, "Hello after 2s").then((result) => {
  
    console.log(result);
  
  }).catch((error) => {
  
    console.log(error);
  
  }).finally(() => console.log('Finally'));