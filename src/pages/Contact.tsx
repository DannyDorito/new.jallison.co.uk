import React, { useState } from 'react';

const Contact = () =>
{
  const [ twitter ] = useState( "https://twitter.com/JohnAllis0n" );
  const [ email ] = useState( "mailto:john@jallison.co.uk" );
  const [ github ] = useState( "https://github.com/DannyDorito" );
  const [ instagram ] = useState( "https://www.instagram.com/johnallis0n" );
  const [ resume ] = useState( "https://docs.google.com/document/d/1zsnem12ZA2wqAPCwe3Y6CJdBgpnC0SpeCacsQYMILMQ/edit?usp=sharing" );
  const [ youtube ] = useState( "https://www.youtube.com/channel/UCo-lbwUsZgmX0tVH7gixR1g" );
  const [ linkedin ] = useState( "https://www.linkedin.com/in/johnallison-" );
  const [ steam ] = useState( "https://steamcommunity.com/id/Danny_Dorito" );

  return (
    <>
      <h1>Contact me!</h1>
      <a href={twitter}>Twitter</a>
      <a href={email}>Email</a>
      <a href={github}>GitHub</a>
      <a href={instagram}>Instagram</a>
      <a href={resume}>Resume</a>
      <a href={youtube}>YouTube</a>
      <a href={linkedin}>LinkedIn</a>
      <a href={steam}>Steam</a>
    </>
  );
}

export default Contact;
