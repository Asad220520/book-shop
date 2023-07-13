export const addToBasket = (el) => {
  return { type: "ADD_TO_BASKET", payload: el };
};
export const removeCard = (id) => {
  return { type: "REMOVE_CART", payload: id };
};
