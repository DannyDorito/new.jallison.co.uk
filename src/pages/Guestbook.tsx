import { FormEvent, useEffect, useState } from "react";
import "../scss/pages/Guestbook.scss";
import { GuestbookEntry } from "../types/Guestbook";

const Guestbook = () =>
{
  const [ comment, setComment ] = useState( "" );
  const [ comments, setComments ] = useState<GuestbookEntry[]>( [] );

  useEffect( () =>
  {
    const getComments = async () =>
    {
      const response = await fetch(
        `${ process.env.REACT_APP_GUESTBOOK_API_ENDPOINT }getall&take=10&skip=0`,
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
          console.log( r );
        } );
    };

    getComments();
  }, [] );

  const handleComment = async ( event: FormEvent<HTMLFormElement> ) =>
  {
    event.preventDefault();
    try
    {
      let response = await fetch(
        `${ process.env.REACT_APP_GUESTBOOK_API_ENDPOINT }post`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify( new GuestbookEntry( "hello", "john" ) ),
        }
      );
      if ( response.ok )
      {
        setComments( ( comments ) => [
          ...comments,
          new GuestbookEntry( comment, "john" ),
        ] );
      }
    } catch ( error )
    {
      console.log( error );
    }
  };

  const updateComment = ( c: string ) =>
  {
    setComment( c );
  };

  return (
    <>
      <div>
        <h1 className="no-select">Guestbook</h1>
        <h2 className="no-select">Leave a comment below!</h2>
        {comments.map( ( guestBookEntry ) => (
          <p key={guestBookEntry.id}>
            {guestBookEntry.message} by: {guestBookEntry.createdBy}
          </p>
        ) )}
        <form onSubmit={handleComment}>
          <label></label>
          <input
            type="text"
            onChange={( event ) => updateComment( event.target.value )}
          ></input>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Guestbook;
