import React from "react";

const Instagram = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={`icon icon-tabler icon-tabler-brand-instagram ${className}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="#9500ff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
  );
};

export { Instagram };