import axios from 'axios';
import md5 from 'md5';

export const PUBLIC_KEY_API = '0983d742085fa98f826d598da75c77b5';
export const ts = Math.floor(Date.now());

const PRIVATE_KEY_API = '7edfad552d55f85b552ac7e71c67aa8ba4c1dd56';
const stringToHash = ts + PRIVATE_KEY_API + PUBLIC_KEY_API;

export const hash = md5(stringToHash);

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public'
});
