import { NextPage } from 'next';
import { Layout, NavigationBar } from '../components';
import { withAuthSync } from '../shared';
import useSWR from 'swr';
import { fetcher } from '../client';

type Record = {
  rank: number;
  title: string;
};

type RequestResult = {
  top: Record[];
};

type InitialData = {
  initialData: RequestResult;
};

const Protected: NextPage<InitialData> = ({ initialData }) => {
  const { data } = useSWR<RequestResult>('top/anime/1/upcoming', {
    initialData
  });

  return (
    <Layout>
      <NavigationBar />
      {data.top.map(it => (
        <div key={it.title}>
          {it.rank}/{it.title}
        </div>
      ))}
    </Layout>
  );
};

// Optional part, but usefull as everything ran inside `getInitialProps` is done on server side
// Without it initial request will be dne on client side
Protected.getInitialProps = async () => {
  // Random example
  const initialData: RequestResult = await fetcher('top/anime/1/upcoming');
  return { initialData };
};

export default withAuthSync(Protected);
