export const cartItems = [];

export const isOrderPlaced = (products, id) => {
    const parsedId = parseInt(id, 10);
    return products.some(product => product.id === parsedId);
};;