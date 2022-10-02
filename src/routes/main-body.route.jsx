import {Route, Routes} from "react-router-dom";
import RequireAuth from "../features/auth/components/require-auth.component";
import Checkout from "../features/order/component/checkout";
import ShopWindow from "../features/shop/components/shop-window.component";
import {CATEGORIES} from "../fake-data/categories.data";
import {PRODUCTS} from "../fake-data/products.data";

function MainBodyRoutes({cartItems, inventory, onCartItemsChange, onOrderFromShopWindow}) {
    return (
        <Routes>
            <Route path="/checkout" element={
                <RequireAuth>
                    <Checkout cartItems={cartItems} onCartItemsChange={onCartItemsChange}/>
                </RequireAuth>
            }/>
            <Route path="*" element={
                <ShopWindow categories={CATEGORIES}
                            products={PRODUCTS.filter(product => product.showInShopWindow)}
                            inventory={inventory} onProductOrder={onOrderFromShopWindow}/>
            }/>
        </Routes>
    );
}

export default MainBodyRoutes;