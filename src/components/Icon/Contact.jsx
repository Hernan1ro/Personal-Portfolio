import React from 'react';

const Contact = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Contact icon</title>
      <defs>
        <linearGradient id="grad" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <g>
        <polyline points="   649,137.999 675,137.999 675,155.999 661,155.999  " />
        <polyline
          points="   653,155.999 649,155.999 649,141.999  "
          stroke="#FFFFFF"
        />
        <polyline points="   661,156 653,162 653,156  " />
      </g>
      <g>
        <path d="M29,27H3c-0.552,0-1-0.447-1-1V10c0-0.552,0.448-1,1-1s1,0.448,1,1v15h24V7H3C2.448,7,2,6.552,2,6s0.448-1,1-1h26   c0.553,0,1,0.448,1,1v20C30,26.553,29.553,27,29,27z" />
      </g>
      <g>
        <path d="M16,19c-0.256,0-0.512-0.098-0.707-0.293l-8-8c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L16,16.586   l7.293-7.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-8,8C16.512,18.902,16.256,19,16,19z" />
      </g>
      <g>
        <path d="M24.001,23c-0.256,0-0.512-0.098-0.707-0.293l-3.002-3.002c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0   l3.002,3.002c0.391,0.391,0.391,1.023,0,1.414C24.513,22.902,24.257,23,24.001,23z" />
      </g>
      <g>
        <path d="M8.001,23c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.999-2.999   c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.999,2.999C8.513,22.902,8.257,23,8.001,23z" />
      </g>
    </svg>
  );
};

export { Contact };
