import Cart from "../../cart/components/cart.component";

function UserSidebar({cartItems, onCartItemChange}) {
    return (<Cart items={cartItems} onItemCountChange={onCartItemChange} onItemRemove={onCartItemChange} />);
}

export default UserSidebar;