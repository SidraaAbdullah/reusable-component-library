import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  .MuiCircularProgress-root {
    color: ${(props) => (props.color ? props.color : 'orange')};
  }
`;
