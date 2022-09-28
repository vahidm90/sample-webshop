import "./shop-window.component.scss"
import ProductCategories from "./product-categories.component";
import ProductThumbnail from "../../product/components/product-thumbnail.component";

function ShopWindow({categories, products, inventory, onProductOrder}) {

    return (
        <div className="shop-window">
            <div className="categories">
                <ProductCategories categories={categories} inventory={inventory} onProductOrder={onProductOrder}/>
            </div>
            <div className="window-products flex-container">
                {products.map(product => (
                    <ProductThumbnail key={product.id} product={product} stock={inventory[product.id]}
                                      onOrder={onProductOrder}/>
                ))}
            </div>
        </div>
    );
}

export default ShopWindow;