import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

export default Title;
