function ItemCount({count, onIncrement, onDecrement}) {
    return (
        <>
            <button onClick={onIncrement} title="Increase Quantity">+</button>
            <span>{count}</span>
            <button onClick={onDecrement} disabled={count < 2} title="DecreaseQuantity">-</button>
        </>
    );
}

export default ItemCount;