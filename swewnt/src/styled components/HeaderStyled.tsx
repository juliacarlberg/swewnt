import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #00436f;
  display: flex;
  align-items: center;
  //max-width: 100vw;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  .logo {
    width: 200px;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  nav {
    display: flex;
  }
  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-family: "Montserrat";
    margin-right: 50px;
  }
  i {
    color: white;
    font-size: 30pt;
    position: absolute;
    right: 50px;
    cursor: pointer;
  }
`;
