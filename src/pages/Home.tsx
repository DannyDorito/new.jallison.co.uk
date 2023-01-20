import { useQuery } from '@apollo/client';
import { GetGitHubBio } from '../gql/GetGitHubBio';
import { UserBase } from '../types/UserBase';
import '../scss/pages/Home.scss';

const Home = () =>
{
  const username = "DannyDorito";
  const { loading, error, data } = useQuery<UserBase>( GetGitHubBio, { variables: { name: username } } );

  if ( error ) {
    return (
      <>
        <div className='no-select'>
          <h1>John Allison</h1>
          <h2>Error: {error?.message}</h2>
        </div>
      </>
    );
  }
  else if ( loading ) {
    return (
      <>
        <div className='no-select'>
          <h1>John Allison</h1>
          <h2>...</h2>
        </div>
      </>
    );
  }
  else {
    return (
      <div className='no-select'>
        <h1>John Allison</h1>
        <h2>{data?.user?.bio}</h2>
      </div>
    );
  }
};

export default Home;
