import {PRODUCTS} from "../../../fake-data/products.data";
import ProductThumbnail from "./product-thumbnail.component";

function CategoryCatalog({categoryId, inventory, onProductOrder}) {

    const products = PRODUCTS.filter(product => product.categoryId === categoryId);

    return products.map(product => (
        <ProductThumbnail key={product.id} product={product} stock={inventory[product.id]} onOrder={onProductOrder} />
    ));
}

export default CategoryCatalog;