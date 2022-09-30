import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import LoginForm from "../../auth/components/login-form.component";
import Cart from "../../cart/components/cart.component";

function PrimarySidebar({cartItems, onCartItemsChange}) {

    const navigate = useNavigate();

    function handleCheckoutButtonClick(e) {
        e.preventDefault();
        navigate('/checkout');
    }

    return (
        <div className="primary-sidebar">
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="" element={
                        <>
                            <Cart items={cartItems} onItemCountChange={onCartItemsChange}
                                  onItemRemove={onCartItemsChange}/>
                            {cartItems.length ? <button onClick={handleCheckoutButtonClick}>Checkout</button> : ''}
                        </>
                    }/>
                </Route>
            </Routes>
        </div>
    );
}

export default PrimarySidebar;