import { Turnstile } from "@marsidev/react-turnstile";
import { FormEvent, useEffect, useState } from "react";
import { GuestbookEntry } from "../types/Guestbook";
import "../scss/pages/Guestbook.scss";

const Guestbook = ( { darkMode }: { darkMode: any } ) =>
{
  const [ comment, setComment ] = useState<string>( "" );
  const [ username, setUsername ] = useState<string>( "" );
  const [ comments, setComments ] = useState<GuestbookEntry[]>( [] );
  const [ showTurnstileCaptcha, setShowTurnstileCaptcha ] = useState<boolean>( false );
  const [ turnstileCaptchaComplete, setTurnstileCaptchaComplete ] = useState<boolean>( false );
  const take = 10;
  const skip = 0;

  useEffect( () =>
  {
    const getComments = async () =>
    {
      //TODO: pagination
      const response = await fetch(
        `${ process.env.REACT_APP_GUESTBOOK_API_ENDPOINT }getall&take=${ take }&skip=${ skip }`,
        {
          method: "GET",
        }
      );
      await response
        .json()
        .then( ( guestbookEntries: string[] ) =>
        {
          guestbookEntries.forEach( ( guestbookEntry ) =>
          {
            const guestbookEntryObj = Object.assign(
              new GuestbookEntry( undefined, undefined ),
              guestbookEntry
            ) as GuestbookEntry;
            setComments( ( comments ) => [ ...comments, guestbookEntryObj ] );
          } );
        } )
        .catch( ( r ) =>
        {
          //TODO: notify user better
          console.error( r );
        } );
    };

    getComments();
  }, [] );

  const handleComment = async ( event: FormEvent<HTMLFormElement> ) =>
  {
    event.preventDefault();
    if ( !!comment && !!username )
    {
      if ( !turnstileCaptchaComplete )
      {
        setShowTurnstileCaptcha( true );
      } else
      {
        try
        {
          //TODO: fix post
          let response = await fetch(
            `${ process.env.REACT_APP_GUESTBOOK_API_ENDPOINT }post`,
            {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify( new GuestbookEntry( comment, username ) ),
            }
          );
          if ( response.ok )
          {
            // TODO: only add comment if it does not already exist
            setComments( ( comments ) => [
              ...comments,
              new GuestbookEntry( comment, username ),
            ] );
            updateComment( "" );
            updateUsername( "" );
          }
        } catch ( error )
        {
          //TODO: notify user better
          console.error( error );
        }
      }
    } else
    {
      // TODO: notify user better
      console.warn( "Guestbook comment or username is blank" );
    }
  };

  const updateComment = ( c: string ) =>
  {
    setComment( c.trim() );
  };

  const updateUsername = ( c: string ) =>
  {
    setUsername( c.trim() );
  }

  const turnstileSuccess = () =>
  {
    setTurnstileCaptchaComplete( true );
  }

  const turnstileErrorOrExpire = () =>
  {
    // TODO: separate error and expire
    // TODO: notify user better
    console.warn( "Turnstile failed" );
  }

  return (
    <>
      <h1 className="no-select">Guestbook</h1>
      <h2 className="no-select">Leave a comment below! | This feature is currently WIP check back later!</h2>
      {comments.map( ( guestBookEntry ) => (
        <p key={guestBookEntry.id}>
          {guestBookEntry.message} by: {guestBookEntry.createdBy}
        </p>
      ) )}
      <form onSubmit={handleComment}>
        <label>Comment</label>
        <input
          type="text"
          id="comment"
          onChange={( event ) => updateComment( event.target.value )}
        ></input>
        <label>Name</label>
        <input
          type="text"
          id="username"
          onChange={( event ) => updateUsername( event.target.value )}
        ></input>
        {showTurnstileCaptcha ?
          <Turnstile
            className="turnstile"
            siteKey={`${ process.env.REACT_APP_TURNSTILE_SITE_KEY }`}
            onSuccess={turnstileSuccess}
            onError={turnstileErrorOrExpire}
            onExpire={turnstileErrorOrExpire}
            options={{
              theme: darkMode ? "dark" : "light"
            }}
          /> : <div></div>}
        <input type="submit" />
      </form>
    </>
  );
};

export default Guestbook;
