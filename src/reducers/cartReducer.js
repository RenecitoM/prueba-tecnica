const initialState = {
    selectedProducts: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          selectedProducts: [...state.selectedProducts, action.product],
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;