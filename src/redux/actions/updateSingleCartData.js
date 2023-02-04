const updatedCartData = (payload) => {
    return {
        type: 'UPDATE_SINGLE_DATA',
        payload,
    }
}

export default updatedCartData;