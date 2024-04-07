import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Button = styled.div`
  pointer-events: ${({ loading, pointerEvents }) => (pointerEvents?.pointerEvents ? 'none' : loading ? 'none' : '')};
  p {
    opacity: ${({ loading }) => (loading ? 0.3 : 1)};
  }
  .icon {
    margin-left: 10px;
  }

  button {
    text-transform: uppercase;
    opacity: ${({ loading, pointerEvents }) => (pointerEvents?.pointerEvents ? 0.7 : loading ? 0.7 : 1)};
    color: white;
    opacity: ${({ loading }) => (loading ? 0.3 : 1)};
    background-color: orange;
    border: 0;
    padding: 0.6rem 1.4rem;
    font-size: 16px;
    margin: 0;
    font-weight: bold;
    border-radius: 5px;
    :disabled {
      opacity: 0.3;
      background-color: gray;
    }
  }
`;
