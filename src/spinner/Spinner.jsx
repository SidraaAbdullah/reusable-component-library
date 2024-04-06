import React from 'react';
import { SpinnerContainer } from './Styles';
import { CircularProgress } from '@material-ui/core';

const Spinner = ({ color, size, style, classes }) => {
  return (
    <SpinnerContainer color={color} style={style} className={classes}>
      <CircularProgress size={20 || size} />
    </SpinnerContainer>
  );
};

export default Spinner;
