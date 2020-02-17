import React from 'react';
import Link from 'next/link';
import { useAuthentication } from '../../hook';

const links = [
  { href: '/login', label: 'Login' },
  { href: '/protected', label: 'Protected' }
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`
}));

const NavigationBar = () => {
  const { isAuthenticated, logout } = useAuthentication();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {!isAuthenticated && (
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        )}
        <li>
          <Link href="/protected">
            <a>Protected</a>
          </Link>
        </li>
        {isAuthenticated && (
          <li>
            <a onClick={() => logout()}>Logout</a>
          </li>
        )}
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  );
};

export default NavigationBar;
