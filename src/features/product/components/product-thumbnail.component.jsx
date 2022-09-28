import {Link} from "react-router-dom";

function ProductThumbnail({product, stock, onOrder}) {

    function handleAddToCartClick(e) {
        e.stopPropagation();
        e.preventDefault();
        if (stock > 0)
            onOrder({[product.id]: stock - 1});
    }

    return (
        <Link to={"/products/" + product.id}>
            <article>
                <header>
                    <h2>{product.productShortName}</h2>
                </header>
                {stock
                    ? <button onClick={handleAddToCartClick}>Add to cart ({stock} left}</button>
                    : <p className="error">OUT OF STOCK</p> }
            </article>
        </Link>
    );
}

export default ProductThumbnail;