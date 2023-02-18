
export const proficiencyBar = ( proficiencyNumber: number ) =>
{
  if ( proficiencyNumber > 10 )
  {
    throw "Cannot be greater than 10";
  }

  if ( proficiencyNumber < 0 )
  {
    throw "Cannot be less than 0";
  }

  // https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions#stylistic-sets
  let bar = [ "", "", "", "", "", "", "", "", "", "" ]

  for ( let index = 0; index < proficiencyNumber; index++ )
  {
    if ( index === 0 )
    {
      bar[ index ] = "";
    } else if ( index === 9 )
    {
      bar[ index ] = "";
    }
    else
    {
      bar[ index ] = ""
    }
  }

  return bar;
}
