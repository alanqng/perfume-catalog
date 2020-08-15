import styled from 'styled-components';

export const ItemDiv = styled.div`
    width: 17vw;
    //max-width: 400px;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    img {
      //width: 100%;
      //height: 95%;
      ////background-size: cover;
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
      color: rgba(0,0,0,0.42);
      }
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
      width: 40vw;

      &:hover {
        .image {
          opacity: unset;
        }

        .custom-button {
          opacity: unset;
        }
      }
    }

    .collection-footer {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;

      .name {
        width: 90%;
        margin-bottom: 15px;
      }

      .price {
        width: 10%;
      }
    }
`;
