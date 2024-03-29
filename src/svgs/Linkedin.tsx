import { SVGProps } from 'react';
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='https://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='linkedin_svg__feather linkedin_svg__feather-linkedin'
    aria-labelledby='linkedinTitle'
    {...props}
  >
    <title id='linkedinTitle'>LinkedIn Logo</title>
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' />
    <circle cx={4} cy={4} r={2} />
  </svg>
);
export default SvgLinkedin;
