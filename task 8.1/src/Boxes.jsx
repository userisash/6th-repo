import React from 'react';

const Box = ({ backgroundColor, height, width, children }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        height: height,
        width: width,
      }}
    >
      {children}
    </div>
  );
};

export default Box;


