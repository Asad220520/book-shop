export const initialState = {
  hear: 0,
  basket: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HEAR":
      return { ...state, hear: state.hear + 1 };
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
      case 'REMOVE_CART':
        return {...state, basket: state.basket.filter(el => {
          return el.id !== action.payload.id
        })}
    default:
      return state;
  }
};
