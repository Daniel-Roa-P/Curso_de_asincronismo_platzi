import fetch from "node-fetch";
  
async function runCode() {

    const url = 'https://domain-api-com';
   
    try {
  
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
  
    } catch {
  
      throw new Error('API Not Found');
  
    }
  
}
  
runCode();
  