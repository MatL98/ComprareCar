import styled from "styled-components";

export const NavBarStyle = styled.nav`
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(99, 99, 99);
    color: rgb(255, 255, 255);
    border-bottom: 1px solid black;
    box-shadow: 0px 2px 5px rgb(119, 119, 119);
  }
  .title {
    display: flex;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    padding-bottom: 5px;
    color: rgb(255, 255, 255);
    text-shadow: 0px 0px 5px black;
  }

  .navBarUl {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: center;
  }

  li {
    padding: 0 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
  }
  .cart-container {
    display: flex;
    flex-direction: column;
  }
  .cartWidget {
    display: flex;
    justify-content: flex-end;
    z-index: 100;
  }
  .cartImg {
    height: 60px;
    width: 60px;
  }
`;
