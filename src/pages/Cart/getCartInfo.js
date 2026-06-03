export const getTotalItemsinCart = (cart) => {
  if (cart == undefined) {
    return 0;
  }
  return cart.reduce((count, item) => count + item.cartCount, 0);
};

export const handleDeleteItems = (setCart, productId, cart) => {
  setCart(cart.filter((product) => product.id !== productId));
};

export const handleItemDecerement = (setCart, productId, cart) => {
  setCart((prevCart) => {
    return prevCart
      .map((product) =>
        productId === product.id
          ? { ...product, cartCount: product.cartCount - 1 }
          : product,
      )
      .filter((prevProducts) => prevProducts.cartCount > 0);
  });
};

export const handleItemIncerement = (setCart, productId, cart) => {
  const exists = false;
  setCart((cart) =>
    cart.map((product) =>
      product.id === productId
        ? {
            ...product,
            cartCount: product.cartCount + 1,
          }
        : product,
    ),
  );
};
