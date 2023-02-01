const initialState = {
    items: [],
};

const storeData = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA': return {
            ...state,
            users: [
                {
                    id: uuidv4(),
                    ...action.payload
                },
                ...state.users
            ]
        }
        default:
            return state;
    }
}