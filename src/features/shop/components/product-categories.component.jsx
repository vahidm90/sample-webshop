import "./product-categories.component.scss"
import {useState} from "react";
import CategoryCatalog from "../../product/components/category-catalog.component";

function ProductCategories({categories, inventory, onInventoryUpdate}) {
    const [openCategory, setOpenCategory] = useState(null);

    function handleExtendButtonClick(e, categoryId) {
        e.preventDefault();
        if (openCategory === categoryId) {
            setOpenCategory(null);
            return;
        }
        setOpenCategory(categoryId);
    }

    return (
        <>
            <div className="flex-container">{categories.map(category => (
                <section key={category.id}>
                    <h1 className="category-title">{category.name}</h1>
                    <p className="category-description">{category.description}</p>
                    <button onClick={e => handleExtendButtonClick(e, category.id)}>Expand</button>
                </section>
            ))}
            </div>
            <div className="flex-container">{openCategory &&
                <CategoryCatalog categoryId={openCategory} inventory={inventory}
                                 onInventoryUpdate={onInventoryUpdate}/>}
            </div>
        </>
    );
}

export default ProductCategories;