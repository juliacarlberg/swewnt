import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #00436f;
  color: white;
  display: flex;
  justify-content: space-around;
  .logo {
    width: 200px;
    height: 160px;
    padding-top: 3%;
  }
  article {
    text-transform: uppercase;
    padding: 1%;
  }
  h2 {
    font-size: 25px;
    font-family: "Bebas Neue";
    width: fit-content;
  }
  p {
    font-size: 16px;
    font-family: "Montserrat";
  }
`;
