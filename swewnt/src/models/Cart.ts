export interface Cart {
  id: number;
  totalPrice: number;
  productsInCart: {
    name: string;
    productPrice: number;
    productQuantity: number;
  }[];
}
