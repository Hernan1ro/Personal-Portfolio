import React from 'react';

const LinkedIn = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Linkedin icon</title>
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4cf3c6" />
          <stop offset="1" stopColor="#0aa2e7" />
        </linearGradient>
      </defs>
      <g transform="translate(96 240)">
        <path d="M-65.602-220.887v10.646h-6.172v-9.935c0-2.496-0.893-4.199-3.127-4.199c-1.707,0-2.721,1.148-3.168,2.259   c-0.162,0.397-0.205,0.948-0.205,1.505v10.37h-6.174c0,0,0.082-16.826,0-18.568h6.174v2.633c-0.012,0.02-0.028,0.041-0.041,0.06   h0.041v-0.06c0.82-1.265,2.285-3.068,5.564-3.068C-68.646-229.245-65.602-226.59-65.602-220.887L-65.602-220.887z M-90.904-237.76   c-2.113,0-3.494,1.387-3.494,3.209c0,1.78,1.342,3.209,3.412,3.209h0.041c2.151,0,3.491-1.428,3.491-3.209   c-0.041-1.822-1.34-3.209-3.452-3.209H-90.904z M-94.031-210.24h6.172v-18.568h-6.172V-210.24z" />
      </g>
    </svg>
  );
};

export { LinkedIn };
