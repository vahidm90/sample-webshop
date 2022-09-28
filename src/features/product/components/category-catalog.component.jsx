import {PRODUCTS} from "../../../fake-data/products.data";
import ProductThumbnail from "./product-thumbnail.component";

function CategoryCatalog({categoryId, inventory, onInventoryUpdate}) {

    const products = PRODUCTS.filter(product => product.categoryId === categoryId);
    console.log(PRODUCTS);

    function handleProductOrder(e) {
        onInventoryUpdate({...inventory, ...e});
    }

    return products.map(product => (
        <ProductThumbnail key={product.id} product={product} stock={inventory[product.id]} onOrder={handleProductOrder} />
    ));
}

export default CategoryCatalog;