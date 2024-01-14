import { useLoaderData, useParams } from "react-router";
import { useCart } from "../contexts/CartContext";
import { Loader } from "../loaders/productLoader";
import { Button } from "../styled components/ButtonStyled";
import { SmallWrapper } from "../styled components/WrapperStyled";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Product } from "../models/Product";

interface ProductViewProps {
  product: Product;
}

export const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const { products } = useLoaderData() as Loader;
  const params = useParams();
  const current = products.find(
    (product) => product._id.toString() == params.id
  );

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!current) {
    console.log("Player not found!");
    return (
      <>
        <Header></Header>
        <h2>Oops! Vi kunde inte hitta den produkten</h2>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <SmallWrapper>
        <div className="product_container" key={current._id}>
          <img
            src={current.imageUrl}
            alt="Fotbollströja"
            className="detail_image"
          />
          <article>
            <h2>{current.productName}</h2>
            <section>
              <h3>Märke:</h3>
              <p>{current.brand}</p>
            </section>
            <section>
              <h3>Pris:</h3>
              <p>{current.productPrice} :-</p>
            </section>
            <Button onClick={handleAddToCart}>Köp</Button>
          </article>
        </div>
      </SmallWrapper>
      <Footer></Footer>
    </>
  );
};
