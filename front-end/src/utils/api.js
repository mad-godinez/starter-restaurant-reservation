
// import formatReservationDate from "./format-reservation-date";
// import formatReservationTime from "./format-reservation-date";
/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
const API_BASE_URL = "http:/localhost:5000"||process.env.REACT_APP_API_BASE_URL || "http:/localhost:5000"; 

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the request.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
export async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }
    const payload = await response.json();

    if (payload.error) {
      console.trace(payload.error)
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }finally{return -1;}
}

/**
 * Retrieves all existing reservation.
 * @returns {Promise<[reservation]>}
 *  a promise that resolves to a possibly empty array of reservation saved in the database.
 */

export async function listReservations(params,signal) {
  const url = new URL(`${API_BASE_URL}/reservations`);
  // params = params.replaceAll('"','');
  if(params) url.searchParams.append("date", params.toString());

  // console.log("params", url.searchParams.append(params.toString()), url.searchParams)
  
  // Object.entries(params).forEach(([key, value]) =>
  // {
  //   if(key) url.searchParams.append(key, value.toString())
  // }
  // );
  const response = await fetchJson(url, { headers, signal }, []);
  return Array.isArray(response) ? response : []; 
    // .then(res =>   console.warn(res)    )
    // .then(formatReservationDate)
    // .then(formatReservationTime);
}
export async function listTables() {
  // headers.append(mode:'cors')
  const url = new URL(`${API_BASE_URL}/tables`),
        response = await fetchJson(url,  []);

  return Array.isArray(response) ? response : []; 
}
