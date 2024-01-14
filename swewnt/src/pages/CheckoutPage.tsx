import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useCart } from "../contexts/CartContext";
import { PayButton } from "../styled components/ButtonStyled";
import { HeadH2, HeadH3 } from "../styled components/TextStyled";

export const CheckoutPage = () => {
  const { cartItems, calculateTotalPrice } = useCart();
  return (
    <>
      <Header></Header>
      <HeadH2>Din varukorg</HeadH2>
      <div className="big_checkout_container">
        <div className="checkout_container">
          <HeadH3>Din beställning</HeadH3>
          {cartItems.map((item, index) => (
            <div className="product_in_checkout">
              <li key={index}>
                <img
                  src={item.imageUrl}
                  alt="Produktbild"
                  className="product_in_cart_image"
                />
                <section>
                  <h3>{item.productName}</h3>
                  <p>{item.productPrice} :-</p>
                </section>
              </li>
            </div>
          ))}
        </div>
        <div className="checkout_container">
          <HeadH3>Summering</HeadH3>
          <form>
            <p>Totalt pris: {calculateTotalPrice()} kr</p>
            <p>Rabattkod</p>
            <input type="text" placeholder="DIN KOD" />
          </form>
          <PayButton>Betala</PayButton>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
