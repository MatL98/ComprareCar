import styled from "styled-components";

export const ItemCartStyle = styled.div`
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }

  .itemCartImg {
    height: 70%;
    width: 70%;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
  }
  span {
    color: green;
    font-size: 1.1rem;
  }
`;
