import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {

    // get products 
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get Cart

    const savedCart = getStoredCart();
    const initialCart = [];
    // aa
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        const quantity = savedCart[id];
        addedProduct.quantity = quantity;
        initialCart.push(addedProduct);
    }
    return { products: products, initialCart: initialCart };
}