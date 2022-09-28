export function cartReducer(state, action) {
    const itemIndex = state.findIndex(item => item.id === action.payload.id);
    if (0 > itemIndex)
        return [...state, {...action.payload, count: 1}];
    const item = state[itemIndex];
    const leftSide = state.slice(0, itemIndex);
    const rightSide = state.slice(itemIndex + 1);
    switch (action.type) {
        case 'increment':
            return [...leftSide, {...item, count: item.count + 1}, ...rightSide];
        case 'decrement':
            if (item.count < 2)
                return [...leftSide,  ...rightSide];
            return [...leftSide, {...item, count: item.count - 1}, ...rightSide];
        case 'remove':
            return [...leftSide, ...rightSide];
        default:
            throw new Error('error in cart reducer');
    }
}