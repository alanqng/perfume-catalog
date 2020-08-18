import styled from 'styled-components';

export const ItemDiv = styled.div`
  width: 17vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    display: block;
    background-position: center;
    margin-bottom: 5px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      margin: 0;
    }

    p {
      margin: 0;
      color: rgba(0, 0, 0, 0.42);
    }
  }

  .price {
    p {
      margin: 0;
      font-weight: bold;
      font-size: 12px;
    }
  }
  
  .rating {
  font-size: 12px;
  }

  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media only screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media only screen and (max-width: 800px) {

    &:hover {
      .image {
        opacity: unset;
      }

      .custom-button {
        opacity: unset;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    width: 100%;

    &:hover {
      .image {
        opacity: unset;
      }

      .custom-button {
        opacity: unset;
      }
    }
  }
`;
