/**
 * Defines the default headers for these functions to work with `json-server`
 */
 const headers = new Headers();
 headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status < 200 || response.status > 399) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();

  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}
export default async function upload(data){
  console.warn("form utils",data)
  const url = 'http://localhost:5000/reservations/new',
        options = {method:'POST', body:JSON.stringify(data), headers};
  try{
    return await fetchJson(url,options,{});
  }finally{return -1;}
}