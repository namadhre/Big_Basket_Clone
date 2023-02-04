const initialState = {
    cartItems: []
};

const cartItemsData = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            };
        case 'DELETE_DATA':
            return {
                ...state,
                cartItems: []
            };
        case 'UPDATE_SINGLE_DATA':
            return {
                ...state,
                cartItems: [
                    action.payload["0"],
                ]
            }
        default:
            return state;

    }
}

export default cartItemsData;