import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #00436f;
  display: flex;
  align-items: center;
  width: 100vw;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  .logo {
    width: 200px;
    padding-top: 1%;
    padding-bottom: 2%;
  }
  nav {
    display: flex;
  }
  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    padding-right: 25%;
    font-family: "Montserrat";
  }
  i {
    color: white;
    font-size: 30pt;
    padding-left: 65%;
  }
`;
