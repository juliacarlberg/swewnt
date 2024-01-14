import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../loaders/productLoader";
import { ItalicP } from "../styled components/TextStyled";
import { ProductsWrapper } from "../styled components/WrapperStyled";

export const Products = () => {
  const { products } = useLoaderData() as Loader;

  console.log(products);

  let productsHtml: JSX.Element[] = [<></>];

  productsHtml = products.map((p) => (
    <Link key={p._id} className="products_container" to={p._id.toString()}>
      <img
        src={p.imageUrl}
        alt="Bild på fotbollströja"
        className="product_image"
      />
      <article>
        <h2>{p.productName}</h2>
        <section>
          <ItalicP>{p.brand}</ItalicP>
          <p className="product_price">{p.productPrice} :-</p>
        </section>
      </article>
    </Link>
  ));

  return (
    <>
      <ProductsWrapper>{productsHtml}</ProductsWrapper>
    </>
  );
};
