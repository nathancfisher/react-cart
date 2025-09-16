function findItemInCart(cart, id) {
  return cart.some((product) => product.id === id);
}

function removeItemFromCart(cart, id) {
  return cart.filter((product) => product.id !== id);
}

function updateItemInCart(cart, id, quantity) {
  return cart.map((product) =>
    product.id === id
      ? { ...product, quantity: product.quantity + quantity }
      : product
  );
}

export { findItemInCart, removeItemFromCart, updateItemInCart };
