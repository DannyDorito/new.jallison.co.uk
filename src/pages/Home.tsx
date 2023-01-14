import { useQuery } from '@apollo/client';
import { GetGitHubBio } from '../gql/GetGitHubBio';
import { UserBase } from '../types/UserBase';
import '../scss/_Main.scss';
import '../scss/Home.scss';

const Home = () =>
{
  const username = "DannyDorito";
  const { loading, error, data } = useQuery<UserBase>( GetGitHubBio, { variables: { name: username } } );

  if ( error ) {
    return (
      <>
        <div className='no-select'>
          <h1>John Allison</h1>
          <h3>Error: {error?.message}</h3>
        </div>
      </>
    );
  }
  else if ( loading ) {
    return (
      <>
        <div className='no-select'>
          <h1>John Allison</h1>
          <h3>...</h3>
        </div>
      </>
    );
  }
  else {
    return (
      <div className='no-select'>
        <h1>John Allison</h1>
        <h3>{data?.user?.bio}</h3>
      </div>
    );
  }
};

export default Home;
