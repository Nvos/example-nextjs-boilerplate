import cookie from 'js-cookie';
import { TOKEN_COOKIE } from '../configuration';
import Router from 'next/router';

const login = ({ token }) => {
  cookie.set(TOKEN_COOKIE, token, { expires: 1 });
  Router.push('/protected');
};

const logout = () => {
  cookie.remove(TOKEN_COOKIE);
  // to support logging out from all windows
  window.localStorage.setItem('logout', JSON.stringify(Date.now()));
  Router.push('/login');
};

const useAuthentication = () => {
  const token = cookie.get(TOKEN_COOKIE);

  return {
    isAuthenticated: !!token,
    login,
    logout
  };
};

export { useAuthentication };
