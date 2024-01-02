import { CartButton } from "../styled components/ButtonStyled";
import { HeadCart } from "../styled components/TextStyled";

export const Cart = () => {
  return (
    <div className="cart">
      <hr />
      <HeadCart>Din varukorg</HeadCart>
      <hr />
      <CartButton>Gå till kassan</CartButton>
    </div>
  );
};
