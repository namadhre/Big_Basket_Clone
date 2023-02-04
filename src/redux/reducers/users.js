import { v4 as uuidv4 } from 'uuid';

const initialState = {
    users: [],
};

const storeData = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA_USERS': return {
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

export default storeData;


