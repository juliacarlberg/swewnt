import styled from "styled-components";

export const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const SegerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffe770;
  padding: 5%;
  .tack_seger {
    border: 10px solid #00436f;
    width: 350px;
  }
`;

export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%; */
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const playerContainer = styled.div`
  display: flex;
  background-color: white;
`;

export const ShopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10%;
`;
