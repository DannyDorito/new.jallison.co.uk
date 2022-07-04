import React, { useState } from 'react';
import '../scss/Home.scss';

const Home = () =>
{
  const [ twitter ] = useState( "https://twitter.com/JohnAllis0n" );
  return (
    <>
      <div>
        <h1>John Allison</h1>
        <h3>I code...</h3>
        <h3>Add me on <a href={twitter}>Twitter</a></h3>
      </div>
    </>
  );
}

export default Home;
