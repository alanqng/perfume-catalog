import styled from 'styled-components';

export const ButtonStyled = styled.button`
  min-width: 150px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media only screen and (max-width: 800px) {
    min-width: unset;
    width: 75px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
  }
`;
