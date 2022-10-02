import ItemCount from "./item-count.component";

function CartItem({item, onIncrement, onDecrement, onRemove}) {
    return (
        <div className="flex-container ai-center">
            <button title="Remove from cart" onClick={onRemove}>X</button>
            <h3>{item.productShortName}</h3>
            <p>{item.productFullName}</p>
            <ItemCount count={item.count} onIncrement={onIncrement} onDecrement={onDecrement}/>
        </div>
    );
}

export default CartItem;