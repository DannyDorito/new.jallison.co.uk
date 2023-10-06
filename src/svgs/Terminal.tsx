import { SVGProps } from 'react';
const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='https://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='terminal_svg__feather terminal_svg__feather-terminal'
    aria-labelledby='terminalTitle'
    {...props}
  >
    <title id='terminalTitle'>Terminal</title>
    <path d='m4 17 6-6-6-6M12 19h8' />
  </svg>
);
export default SvgTerminal;
