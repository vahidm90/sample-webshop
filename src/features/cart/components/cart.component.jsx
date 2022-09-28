import CartItem from "./cart-item.component";

function Cart({items, onItemCountChange, onItemRemove}) {
    return items.length ? items.map(item =>
        <CartItem key={item.id} item={item}
                  onIncrement={onItemCountChange.bind(undefined, 'increment', item)}
                  onDecrement={onItemCountChange.bind(undefined, 'decrement', item)}
                  onRemove={onItemRemove.bind(undefined, 'remove', item)}
        />) : <p>Your shopping cart is empty!</p>;
}

export default Cart;