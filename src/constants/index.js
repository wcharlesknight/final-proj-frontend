


export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
  // Authorization: `Bearer ${localStorage.token}`
};


export const CONFIG_GET = {method: 'GET', headers: {'Content-Type': 'application/json', 
Authorization: `Bearer ${localStorage.token}`}  } 