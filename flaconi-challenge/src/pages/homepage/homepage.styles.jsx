import styled from 'styled-components';

export const HomepageDiv = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
    div {
    margin-right: 2px;
    }
    
    p {
      margin-right: 5px;
    }
    
    @media only screen and (max-width: 700px) {
      flex-direction: column;
      
      div {
      margin-bottom: 2px;
      }
      
      p {
        margin: 0;
      }
      
    }
  }

  .sort-container {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }

  .paginator {
    display: flex;
    justify-content: center;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;

    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
