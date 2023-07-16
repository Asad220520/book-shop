export const addToBasket = (el) => {
  return { type: "ADD_TO_BASKET", payload: el };
};
export const removeCard = (id) => {
  return { type: "REMOVE_CART", payload: id };
};
export const decrementQyantity = (id) => {
  return { type: "DECREMENT_QYANTITY", payload: id };
};
export const addToFavorite = (el) => {
  return { type: "ADD_TO_FAVORITE", payload: el };
};
