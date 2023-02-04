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
        case "DELETE_DATA":
            console.log("hello");
            return {
                cartItems: []
            }

        default:
            return state;
    }
}

export default cartItemsData;