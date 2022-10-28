import { useQuery } from '@apollo/client';
import { GET_GITHUB_BIO } from '../gql/GET_GITHUB_BIO';
import { UserBase } from '../types/UserBase';
import '../scss/Home.scss';

const Home = () => {
  const { loading, error, data } = useQuery<UserBase>(GET_GITHUB_BIO);

  return (
    <>
      <div className='no-select'>
        <h1>John Allison</h1>
        {loading || error?.message ? <h3>...</h3> : <h3>{data?.user?.bio}</h3>}
      </div>
    </>
  );
};

export default Home;
