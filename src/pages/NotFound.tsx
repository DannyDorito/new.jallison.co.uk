import { Link } from 'react-router-dom';
import '../scss/NotFound.scss';

const NotFound = () =>
{
  return (
    <>
      <div>
        <h1 className='no-select'>Not Found!</h1>
        <Link to='/'>Go Home</Link>
      </div>
    </>
  );
};

export default NotFound;
