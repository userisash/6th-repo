import React from 'react';
import Box from './Boxes.jsx';

const NewBox1 = () => {
  return (
    <div className='box1'>
    <Box backgroundColor="green" height="200px" width="400px">
      <Box2 />
    </Box>
    </div>
  );
};

const Box2 = () => {
  return (
    <div className='box2'>
    <Box backgroundColor="blue" height="150px" width="350px">
      <Box3 />
    </Box>
    </div>
  );
};

const Box3 = () => {
  return (
    <div className='box3'>
    <Box backgroundColor="pink" height="100px" width="180px">
      <Box4 />
      <Box4 />
    </Box>
    </div>
  );
};

const Box4 = () => {
    <div className='box4'>
  return <Box backgroundColor="purple" height="50px" width="50px" />;
  </div>
};

export default NewBox1;
