import './App.scss';
import {PRODUCTS} from "./fake-data/products.data";
import {useReducer} from "react";
import {cartReducer} from "./features/cart/utils/cart-reducer.util";
import {inventoryReducer} from "./features/shop/utils/inventory-reducer.util";
import AuthProvider from "./features/auth/components/auth-provider.component";
import PrimarySidebar from "./features/layout/components/primary-sidebar.component";
import TopBar from "./features/layout/components/top-bar.component";
import MainBody from "./features/layout/components/main-body.component";

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
                <TopBar/>
                <div className="grid-container wrap-grid">
                    <MainBody inventory={inventory} cartItems={cartItems}
                              onCartItemsChange={handleChangeInCart}
                              onOrderFromShopWindow={handleProductOrderFromShopWindow}/>
                    <PrimarySidebar cartItems={cartItems} onCartItemsChange={handleChangeInCart}/>
                </div>
            </AuthProvider>
        </div>
    );
}

export default App;
