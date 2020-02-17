import { FC } from 'react';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { fetcher } from '../client';
import 'isomorphic-unfetch';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default App;
