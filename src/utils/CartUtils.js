function findItemInCart(cart, id) {
  return cart.find((item) => item.id === id);
}

function removeItemFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}

function updateItemInCart(cart, id, quantity) {
  return cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + quantity } : item
  );
}

export { findItemInCart, removeItemFromCart, updateItemInCart };
