export const initialState = {
  hear: 0,
  basket: [],
  favorite: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const existingItem = state.basket.find(
        (el) => el.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      }
      return {
        ...state,
        basket: [
          ...state.basket,
          { ...action.payload, quantity: 1, counter: 99 },
        ],
      };
    case "ADD_TO_FAVORITE": {
      const favor = state.favorite.find((el) => el.id === action.payload.id);
      if (favor) {
        return {
          ...state,
          favorite: [...state.favorite],
        };
      }
      return {
        ...state,
        favorite: [...state.favorite, { ...action.payload }],
      };
    }
    case "DECREMENT_QYANTITY":
      {
        const res = state.basket.find((el) => el.id === action.payload.id);
        if (res.quantity > 1) {
          return {
            ...state,
            basket: state.basket.map((el) =>
              el.id === action.payload.id
                ? { ...el, quantity: el.quantity - 1 }
                : el
            ),
          };
        }
      }
      return state;
    case "REMOVE_CART":
      return {
        ...state,
        basket: state.basket.filter((el) => {
          return el.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};
