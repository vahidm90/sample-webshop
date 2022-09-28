export function inventoryReducer(state, action) {
    const id = action.payload.productId;
    const currentStock = state[id];
    switch (action.type) {
        case 'increment':
            return {...state, [id]: currentStock + 1};
        case 'decrement':
            return {...state, [id]: currentStock - 1};
        case 'add':
            return {...state, [id]: currentStock + action.payload.count};
        default:
            throw new Error('error in inventory reducer');
    }
}