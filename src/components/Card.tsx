import styled from 'styled-components';

const borderRadius = '10px';
const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: ${borderRadius};
  transition: color 0.15s ease, border-color 0.15s ease;
  position: relative;

  &:after {
    content: '';
    border-radius: ${borderRadius};
    z-index: -1;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: white;
    opacity: 0.2;
    filter: blur(5px);
  }
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export default Card;
