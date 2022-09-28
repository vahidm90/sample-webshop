import './App.scss';
import UserSidebar from "./features/user/components/user-sidebar.component";
import ShopWindow from "./features/shop/components/shop-window.component";
import {CATEGORIES} from "./fake-data/categories.data";
import {PRODUCTS} from "./fake-data/products.data";
import {useReducer} from "react";
import {cartReducer} from "./features/cart/utils/cart-reducer.util";
import {inventoryReducer} from "./features/shop/utils/inventory-reducer.util";

function App() {
    const products = PRODUCTS.filter(product => product.showInShopWindow);
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
        <div className="App">
            <header className="App-header">
                <h1>A Sample Web Shop!</h1>
            </header>
            <div className="grid-container wrap-grid">
                <div className="shop-window">
                    <ShopWindow categories={CATEGORIES} products={products} inventory={inventory}
                                onProductOrder={handleProductOrderFromShopWindow}></ShopWindow>
                </div>

                <div className="primary-sidebar">
                    {<UserSidebar cartItems={cartItems} onCartItemChange={handleChangeInCart} />}
                </div>
            </div>
        </div>
    );
}

export default App;
