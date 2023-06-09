import { ProficiencyBarProps } from '../props/ProficiencyBarProps';
import '../scss/components/ProficiencyBar.scss';
export const ProficiencyBar = ({ props }: { props: ProficiencyBarProps }) => {
  return (
    <div className='proficiency-wrapper'>
      <div>{props.name}</div>
      <div className='proficiency-outer-bar'>
        <div style={{ width: props.percent * 10 }} className='proficiency-inner-bar'></div>
      </div>
    </div>
  );
};

export default ProficiencyBar;
