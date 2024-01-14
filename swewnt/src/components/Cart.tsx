import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { CartButton } from "../styled components/ButtonStyled";
import { CartStyled } from "../styled components/CartStyled";
import {
  CartH2,
  HeadCart,
  ItalicP,
  PriceP,
} from "../styled components/TextStyled";

export const Cart = () => {
  const {
    cartItems,
    calculateTotalPrice,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const handleRemoveProduct = (productId: number) => {
    removeProduct(productId);
  };

  const handleIncreaseQuantity = (productId: number) => {
    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId: number) => {
    decreaseQuantity(productId);
  };

  return (
    <CartStyled>
      <HeadCart>Din varukorg</HeadCart>
      {cartItems.map((item, index) => (
        <ul>
          <li key={index}>
            <img
              src={item.imageUrl}
              alt="Produktbild"
              className="product_in_cart_image"
            />
            <section>
              <span>
                <h3>{item.productName}</h3>
                <ItalicP>{item.brand}</ItalicP>
              </span>
              <div className="quantity_container">
                <button onClick={() => handleDecreaseQuantity(item._id)}>
                  -
                </button>
                <p>{item.productQuantity}</p>
                <button onClick={() => handleIncreaseQuantity(item._id)}>
                  +
                </button>
              </div>
            </section>
            <section>
              <button
                className="delete_button"
                onClick={() => handleRemoveProduct(item._id)}
              >
                X
              </button>
              <PriceP>{item.productPrice} :-</PriceP>
            </section>
          </li>
        </ul>
      ))}
      <div className="cart_total_price">
        <HeadCart>Totalsumma:</HeadCart>
        <PriceP>{calculateTotalPrice()} :-</PriceP>
      </div>
      <CartButton>
        <Link to={"/checkout"}>
          <CartH2>Gå till kassan</CartH2>
        </Link>
      </CartButton>
    </CartStyled>
  );
};
