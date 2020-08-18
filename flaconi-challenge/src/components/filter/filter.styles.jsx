import styled from 'styled-components';

export const FilterDiv = styled.div`
  width: 200px;
  font-size: 14px;
  position: relative;

  .dropdown-button {
    float: left;
    width: 100%;
    padding: 10px 12px;
    background-color: white;
    cursor: pointer;
    border: 1px solid lightgray;
    box-sizing: border-box;

    .dropdown-label,
    .dropdown-quantity {
      float: left;
    }

    .dropdown-quantity {
      margin-left: 4px;
    }

    .fa-filter {
      float: right;
    }
  }

  .dropdown-list {
    float: left;
    width: 100%;
    background-color: white;
    border: 1px solid lightgray;
    border-top: none;
    box-sizing: border-box;
    padding: 10px 12px;
    position: absolute;
    z-index: 1000;
    left: 0;
    top: 100%;

    ul {
      margin: 10px 0;
      max-height: 200px;
      overflow-y: auto;
      padding-left: 0;
      li {
        list-style: none;
      }
      input[type='checkbox'] {
        position: relative;
        top: 2px;
      }
    }
    
    button {
    margin: 0 auto;
    }
  }
`;
