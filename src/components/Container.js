import styled from 'styled-components';

function Container({ children }) {
  return <Background>{children}</Background>;
}

export default Container;

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #17171f;
`;
