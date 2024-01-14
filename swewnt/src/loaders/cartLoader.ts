import axios from "axios";
import { Cart } from "../models/Cart";

export interface Loader {
  carts: Cart[];
}

export const cartLoader = async () => {
  let carts: Cart[] = [];

  try {
    const response = await axios.get("http://localhost:5002/api/v1/carts");
    carts = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return { carts };
};
