import { useState, useEffect } from "react";

const getStorageValue = ( key: string, defaultValue: any ) =>
{
  const saved = localStorage.getItem( key );
  return saved === null ? defaultValue : JSON.parse( saved );
}

export const useLocalStorage = ( key: string, defaultValue: any ) =>
{
  const [ value, setValue ] = useState( () =>
  {
    return getStorageValue( key, defaultValue );
  } );

  useEffect( () =>
  {
    localStorage.setItem( key, JSON.stringify( value ) );
  }, [ key, value ] );

  return [ value, setValue ];
};
