const deleteData = (payload) => {
    return {
        type: 'DELETE_DATA',
        payload,
    }
}

export default deleteData;