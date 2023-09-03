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
    case 'RESET_CART':
      return initialState;
    case 'REMOVE_FROM_CART':
      const updatedProducts = [...state.selectedProducts];
      updatedProducts.splice(action.index, 1); 
      return {
        ...state,
        selectedProducts: updatedProducts,
      };
    default:
      return state;
  }
};

export default cartReducer;