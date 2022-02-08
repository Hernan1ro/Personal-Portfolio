import React from 'react';

const Language = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      data-name="Layer 1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Language icon</title>
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4cf3c6" />
          <stop offset="1" stopColor="#0aa2e7" />
        </linearGradient>
      </defs>
      <path d="M391.63,129.21c0-51.46-58.68-93.33-130.81-93.33S130,77.75,130,129.21c0,32,22.21,61.09,59.59,78.35L185,247.91a4.76,4.76,0,0,0,2.42,4.7,4.68,4.68,0,0,0,2.32.61,4.75,4.75,0,0,0,3-1l40.24-31.77a183.32,183.32,0,0,0,27.93,2.12C333,222.54,391.63,180.67,391.63,129.21ZM260.82,213a174,174,0,0,1-28.46-2.33,4.76,4.76,0,0,0-3.74,1l-32.88,26,3.73-32.42a4.77,4.77,0,0,0-2.84-4.91c-35.74-15.5-57.08-42.06-57.08-71.06,0-46.21,54.4-83.8,121.27-83.8S382.09,83,382.09,129.21,327.69,213,260.82,213Z" />
      <path d="M329.19,103.85H192.45a4.77,4.77,0,1,0,0,9.53H329.19a4.77,4.77,0,1,0,0-9.53Z" />
      <path d="M329.19,145h-28a4.77,4.77,0,0,0,0,9.53h28a4.77,4.77,0,1,0,0-9.53Z" />
      <path d="M270.7,145H192.45a4.77,4.77,0,1,0,0,9.53H270.7a4.77,4.77,0,1,0,0-9.53Z" />
      <path d="M231.47,363.43a49.87,49.87,0,0,1-2.59-11.72c-6.62-68.62-37.58-103.42-92-103.42-40.06,0-74.53,22.08-89.95,57.63-17.29,39.83-7.31,85.59,26.65,122.76v42.67a4.77,4.77,0,1,0,9.53,0V426.81a4.81,4.81,0,0,0-1.28-3.26C49.5,389,39.72,346.45,55.66,309.71c13.89-32,45-51.89,81.21-51.89,49.37,0,76.37,31,82.52,94.81a59.62,59.62,0,0,0,3.09,14l7.87,22.32a9.66,9.66,0,0,1-8.42,12.84l-9.89.73a5.39,5.39,0,0,0-4.48,3.48l-9.26,28.17a8.59,8.59,0,0,1-10.16,5.7l-38.42-9a4.77,4.77,0,0,0-5.86,4.64v35.86a4.77,4.77,0,0,0,9.54,0V441.5L186,449.12a18.06,18.06,0,0,0,21.39-12l8.33-25.34,6.93-.5a19.21,19.21,0,0,0,16.72-25.53Z" />
      <path d="M465.08,305.92c-15.42-35.55-49.89-57.63-89.94-57.63-54.45,0-85.41,34.8-92,103.42a49.39,49.39,0,0,1-2.6,11.72l-7.86,22.32a19.2,19.2,0,0,0,16.71,25.53l6.94.5,8.33,25.34a18.06,18.06,0,0,0,21.39,12l32.57-7.62v29.85a4.77,4.77,0,1,0,9.53,0V435.49a4.75,4.75,0,0,0-5.85-4.64l-38.42,9a8.58,8.58,0,0,1-10.16-5.7l-9.28-28.21a5.38,5.38,0,0,0-4.45-3.44l-9.9-.73a9.66,9.66,0,0,1-8.42-12.84l7.86-22.32a59.14,59.14,0,0,0,3.1-14c6.15-63.8,33.14-94.81,82.53-94.81,36.19,0,67.31,19.89,81.2,51.89,15.94,36.74,6.16,79.3-26.16,113.84a4.81,4.81,0,0,0-1.28,3.26v44.54a4.77,4.77,0,1,0,9.53,0V428.68C472.4,391.51,482.37,345.75,465.08,305.92Z" />
    </svg>
  );
};

export { Language };