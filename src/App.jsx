import './App.scss';
import UserSidebar from "./features/user/components/user-sidebar.component";
import ShopWindow from "./features/shop/components/shop-window.component";
import {CATEGORIES} from "./fake-data/categories.data";
import {PRODUCTS} from "./fake-data/products.data";
import {useState} from "react";

function App() {
    const products = PRODUCTS.filter(product => product.showInShopWindow);
    const [inventory, updateInventory] = useState(() => {
        const inventoryMap = {};
        PRODUCTS.forEach(product => inventoryMap[product.id] = product.inventory);
        return inventoryMap;
    });

    return (
        <div className="App">
            <header className="App-header">
                <h1>A Sample Web Shop!</h1>
            </header>
            <div className="grid-container wrap-grid">
                <div className="shop-window">
                    <ShopWindow categories={CATEGORIES} products={products} inventory={inventory}
                                onInventoryUpdate={e => updateInventory(e)}></ShopWindow>
                </div>

                <div className="primary-sidebar">
                    <UserSidebar></UserSidebar>
                </div>
            </div>
        </div>
    );
}

export default App;
