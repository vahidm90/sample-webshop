import './App.scss';
import ShopWindow from "./features/shop/components/shop-window.component";
import {CATEGORIES} from "./fake-data/categories.data";
import {PRODUCTS} from "./fake-data/products.data";
import {useReducer} from "react";
import {cartReducer} from "./features/cart/utils/cart-reducer.util";
import {inventoryReducer} from "./features/shop/utils/inventory-reducer.util";
import AuthProvider from "./features/auth/components/auth-provider.component";
import {Route, Routes} from "react-router-dom";
import RequireAuth from "./features/auth/components/require-auth.component";
import Checkout from "./features/order/component/checkout";
import UserThumbnail from "./features/user/components/user-thumbnail.component";
import PrimarySidebar from "./features/shop/components/primary-sidebar.component";

function App() {

    const [cartItems, setCartItems] = useReducer(cartReducer, undefined, () => []);
    const [inventory, setInventory] = useReducer(inventoryReducer, undefined, () => {
        const inventoryMap = {};
        PRODUCTS.forEach(product => inventoryMap[product.id] = product.inventory);
        return inventoryMap;
    });

    function handleProductOrderFromShopWindow(productId) {
        updateInventory('decrement', productId);
        updateCart('increment', productId);
    }

    function handleChangeInCart(type, item) {
        if (type === 'increment' && !inventory[item.id])
            // todo: maybe show a toast that order quantity is exceeding inventory size
            return;
        if (type === 'remove')
            updateInventory('add', item.id, item.count);
        else
            updateInventory((type === 'increment') ? 'decrement' : 'increment', item.id)
        updateCart(type, item.id);
    }

    function updateCart(type, productId) {
        setCartItems({type, payload: PRODUCTS.find(product => product.id === productId)});
    }

    function updateInventory(type, productId, count = 0) {
        setInventory({type, payload: {productId, count}});
    }

    return (
        <div className="App flex-container fd-column">
            <AuthProvider>
                <header className="app-header flex-container ai-center">
                    <h1 className="p-1 m-0 fw-400">A Sample Web Shop!</h1>
                    <div className="p-1 m-l-auto">
                        <UserThumbnail/>
                    </div>
                </header>
                <div className="grid-container wrap-grid">
                    <Routes>
                        <Route path="/checkout" element={<RequireAuth><Checkout/></RequireAuth>}/>
                        <Route path="*" element={
                            <ShopWindow categories={CATEGORIES}
                                        products={PRODUCTS.filter(product => product.showInShopWindow)}
                                        inventory={inventory} onProductOrder={handleProductOrderFromShopWindow}/>
                        }/>
                    </Routes>
                    <PrimarySidebar cartItems={cartItems} onCartItemsChange={handleChangeInCart} />
                </div>
            </AuthProvider>
        </div>
    );
}

export default App;
