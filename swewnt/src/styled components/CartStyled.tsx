import styled from "styled-components";

export const CartStyled = styled.div`
  background-color: #00436f;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 18%;
  width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  hr {
    width: 200px;
    border: 1px solid #ffd401;
    margin-top: 0;
    margin-bottom: 0;
  }
  h2 {
    margin: 3%;
  }
  a {
    margin: 0;
  }
  .cart_total_price {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    display: flex;
    flex-direction: column;
    height: 138px;
    justify-content: space-between;
    h3 {
      margin: 0;
      font-size: 18pt;
      width: 200px;
    }
    p {
      margin: 0;
      font-size: 13pt;
    }
  }
`;
