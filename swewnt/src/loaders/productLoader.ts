import axios from "axios";
import { Product } from "../models/Product";

export interface Loader {
  products: Product[];
}

export const productLoader = async () => {
  let products: Product[] = [];

  // // Attempt to retrieve products from localStorage
  // const storedProducts = localStorage.getItem("products");

  // if (storedProducts) {
  //   try {
  //     // Try to parse the storedProducts string
  //     products = JSON.parse(storedProducts);
  //   } catch (error) {
  //     console.error("Error parsing stored products:", error);
  //   }
  // }

  // // If products are found in localStorage, return them
  // if (products.length > 0) {
  //   return { products };
  // }

  // If products are not found in localStorage or parsing fails, make an API request
  try {
    const response = await axios.get("http://localhost:5002/api/v1/products");
    products = response.data; // Assuming the API response directly contains the array of products
    localStorage.setItem("products", JSON.stringify(products)); // Save products to localStorage
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  // Return the data object with the players array
  return { products };
};
