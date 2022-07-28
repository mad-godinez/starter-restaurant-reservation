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
/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
 const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default async function upload(data){
  console.log("form utils",data)
  const options = {method:'POST', body:JSON.stringify(data), headers};
  try{
    return await fetchJson(API_BASE_URL,options,{});
  }finally{return -1;}
}