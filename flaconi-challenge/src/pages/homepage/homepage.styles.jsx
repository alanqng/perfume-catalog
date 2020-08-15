import styled from "styled-components";

export const HomepageDiv = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr;

    }

    & .collection-item {
      margin-bottom: 30px;
    }
}
`