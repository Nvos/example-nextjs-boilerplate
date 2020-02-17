import { FC, useEffect } from 'react';
import Router from 'next/router';
import { Layout, NavigationBar } from '../components';
import { useAuthentication } from '../hook';

const Login: FC = () => {
  const { isAuthenticated, login } = useAuthentication();

  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/protected');
    }
  }, [isAuthenticated]);

  return (
    <Layout>
      <NavigationBar />
      Login
      <button onClick={() => login({ token: 'pass-token-from-api' })}>
        Login
      </button>
    </Layout>
  );
};

export default Login;
