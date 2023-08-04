export async function runCode(url) {

    try {
  
      const ruta = new URL(url);
  
      const response = await fetch(ruta, {
        method: "GET",
      });
  
      const data = await response.json();
  
      return data;
  
    } catch (error) {
  
      console.log(error)
  
      if ((error instanceof TypeError)
        &&
        !(error == 'TypeError: NetworkError when attempting to fetch resource.')) {
        
        throw new Error('Invalid URL');
  
      } else {
  
        throw new Error('Something was wrong');
  
      }
  
  
    }
  
  }