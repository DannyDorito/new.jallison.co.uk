import React, { useEffect, useState } from 'react';

function Projects ()
{
  const [ error, setError ] = useState( null );
  const [ isLoaded, setIsLoaded ] = useState( false );
  const [ items, setItems ] = useState( [] );

  useEffect( () =>
  {
    fetch( "https://api.github.com/users/DannyDorito/repos" )
      .then( response => response.json() )
      .then(
        ( result ) =>
        {
          setIsLoaded( true );
          setItems( result );
        },
        ( error ) =>
        {
          setIsLoaded( true );
          setError( error );
        }
      )
  }, [] )

  if ( error )
  {
    return (
      <>
        <div>
          Error: {error}
        </div>
      </>
    );
  } else if (!isLoaded) {
    return (
      <>
        <div>
          <h2>Loading..</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <ul>
          {items.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Projects;
