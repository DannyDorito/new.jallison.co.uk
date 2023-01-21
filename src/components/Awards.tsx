import { awards } from "../types/AwardsData";
import '../scss/components/Awards.scss';

const Awards = () =>
{
  return (
    <>
      <h1 className='no-select'>Awards</h1>
      {awards.map( ( award ) =>
      (
        <div key={award.key} className='awards'>
          <h2>{award.name}</h2>
          <p className='awards'>
            {award.additionalInformation}
          </p>
        </div>
      ) )}
    </>
  );
}

export default Awards;
