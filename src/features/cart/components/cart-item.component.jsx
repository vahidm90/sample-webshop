import ItemCount from "./item-count.component";

function CartItem({item, onIncrement, onDecrement, onRemove}) {
    return (
        <>
            <button title="Remove from cart" onClick={onRemove}>X</button>
            <h3>{item.productShortName}</h3>
            <p>{item.productFullName}</p>
            <ItemCount count={item.count} onIncrement={onIncrement} onDecrement={onDecrement}/>
        </>
    );
}

export default CartItem;