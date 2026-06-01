export const getTotalItemsinCart = (cart) => {
  if (cart == undefined) {
    return 0;
  }
  return cart.reduce((count, item) => count + item.cartCount, 0);
};
