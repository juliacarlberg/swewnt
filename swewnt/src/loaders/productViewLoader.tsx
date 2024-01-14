import { useLoaderData, useParams } from "react-router";
import { Loader } from "./productLoader";
import { ProductView } from "../components/ProductView";

export const ProductViewLoader = () => {
  const { products } = useLoaderData() as Loader;
  // Extract product ID from route parameters
  const params = useParams();
  const productId = params.id;
  // Find the product based on the ID
  const product = products.find((p) => p._id.toString() === productId);

  if (!product) {
    console.log("Product not found!");
    // Handle the case where the product is not found, e.g., redirect or display an error message
    return null;
  }

  // Render the ProductView component with the loaded product
  return <ProductView product={product}></ProductView>;
};
