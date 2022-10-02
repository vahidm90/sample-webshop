import CartItem from "./cart-item.component";

function Cart({items, onItemCountChange, onItemRemove}) {
    const emptyCart = items.length ? '' : <p>Your shopping cart is empty!</p>;
    let totalPrice = 0;
    return (
        <div className="flex-container fd-column">
            {emptyCart}{
            items.map(item => {
                totalPrice += item.price * item.count;
                return <CartItem key={item.id} item={item}
                          onIncrement={onItemCountChange.bind(undefined, 'increment', item)}
                          onDecrement={onItemCountChange.bind(undefined, 'decrement', item)}
                          onRemove={onItemRemove.bind(undefined, 'remove', item)}
                />;
            })
        }
            <p>Total Price: {totalPrice}</p>
        </div>
    );
}

export default Cart;