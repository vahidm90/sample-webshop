import './shop-window.component.scss'
import ProductCategories from "./product-categories.component";
import ProductThumbnail from "../../product/components/product-thumbnail.component";

function ShopWindow({categories, products, inventory, onInventoryUpdate}) {

    function handleProductOrder(e) {
        onInventoryUpdate({...inventory, ...e});
    }

    return (
        <div className="shop-window">
            <div className="categories">
                <ProductCategories categories={categories} inventory={inventory} onInventoryUpdate={handleProductOrder}/>
            </div>
            <div className="window-products">
                {products.map(product => (
                    <ProductThumbnail key={product.id} product={product} stock={inventory[product.id]}
                                      onOrder={handleProductOrder}/>
                ))}
            </div>
        </div>
    );
}

export default ShopWindow;