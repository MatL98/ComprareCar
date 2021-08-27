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

  h2{
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: black;
  }
  p{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
  }
  span {
    color: green;
    font-size: 1.2rem;
  }
  .btn-remove{
    margin-top: 0.5rem;
    height: 25px;
    width: 125px;
    background-color: red;
    border: none;
    color: white;
    border-radius: 50px;
    letter-spacing: 1px;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    &:hover{
      background-color: #c50101;
	}
  }
`;
