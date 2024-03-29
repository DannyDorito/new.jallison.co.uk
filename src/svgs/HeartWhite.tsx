import { SVGProps } from 'react';
const SvgHeartWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='https://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='red'
    stroke='#fff'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='heart-white_svg__feather heart-white_svg__feather-heart'
    aria-labelledby='whiteHeartTitle'
    {...props}
  >
    <title id='whiteHeartTitle'>White Heart</title>
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);
export default SvgHeartWhite;
