import { useQuery } from '@apollo/client';
import { GetGitHubBio } from '../gql/GetGitHubBio';
import { UserBase } from '../types/UserBase';
import '../scss/_Main.scss';
import '../scss/Home.scss';

const Home = () => {
  const username = "DannyDorito";
  const { loading, error, data } = useQuery<UserBase>(GetGitHubBio, { variables: { name: username } });

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
