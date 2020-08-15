import styled from 'styled-components';

export const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    margin-bottom: 25px;

    @media only screen and (max-width: 800px) {
      height: 60px;
      //padding: 10px;
      margin-bottom: 20px;
    }


    .logo-container {
        height: 100%;
        width: 70px;
        //padding: 25px;

        @media only screen and (max-width: 800px) {
          width: 50px;
          padding: 0;
        }
      }

      .options {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;

        @media only screen and (max-width: 800px) {
          width: 80%;
        }

        .option {
          padding: 10px 15px;
        }
      }
`;
