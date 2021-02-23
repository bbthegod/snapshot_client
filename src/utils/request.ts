import axios, { AxiosResponse } from 'axios';
import { BASE_URL, MASTER } from './url';
export class ResponseError extends Error {
  public response: AxiosResponse;

  constructor(response: AxiosResponse) {
    super(response.statusText);
    this.response = response;
  }
}

function parseJSON(response: AxiosResponse) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.data;
}

function checkStatus(response: AxiosResponse) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}
function isMaster(url) {
  return url.split('/')[1] === 'auth' && url.split('/')[2] !== 'check';
}
export async function request(payload) {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${!isMaster(payload.url) ? token : MASTER}`,
    },
  });
  const fetchResponse = await instance(payload);
  const response = checkStatus(fetchResponse);
  return parseJSON(response);
}
