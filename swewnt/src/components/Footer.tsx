import logo from "../assets/SVFFlogo.webp";
import { FooterStyled } from "../styled components/FooterStyled";

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <article>
          <h2>Sociala medier</h2>
          <p>Instagram</p>
          <p>Tiktok</p>
          <p>Facebook</p>
          <p>X</p>
          <p>Youtube</p>
          <p>LinkedIn</p>
        </article>
        <img className="logo" src={logo} alt="SVFF logga" />
        <article>
          <h2>Länkar</h2>
          <p>Supporterklubben.se</p>
          <p>Om cookies</p>
          <p>Personuppgifter</p>
          <p>Widgets</p>
          <p>Media</p>
        </article>
      </FooterStyled>
    </>
  );
};
