import Cart from "../../cart/components/cart.component";

function Checkout({cartItems, onCartItemsChange}) {
    return (
        <>
            <h2>Thanks for your shopping!</h2>
            <p>Your cart contains:</p>
            <Cart items={cartItems} onItemRemove={onCartItemsChange} onItemCountChange={onCartItemsChange}></Cart>
        </>
    );
}

export default Checkout;