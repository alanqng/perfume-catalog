import styled from "styled-components";

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
    
    & :first-child {
    margin-right: 10px;
    }
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
    
    
    
    //@media only screen and (max-width: 580px) {
    //  grid-template-columns: 1fr;
    //  width: 100%;
    //
    //}

    & .collection-item {
      margin-bottom: 30px;
    }
}
`
