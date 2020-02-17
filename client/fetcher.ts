import { API_URL, TOKEN_COOKIE } from '../configuration';
import cookie from 'js-cookie';

export const fetcher = url =>
  fetch(`${API_URL}${url}`, {
    credentials: 'include'
  }).then(r => r.json());
