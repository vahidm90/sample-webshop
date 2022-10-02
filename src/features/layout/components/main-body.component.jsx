import MainBodyRoutes from "../../../routes/main-body.route";

function MainBody({inventory, cartItems, onCartItemsChange, onOrderFromShopWindow}) {
    return (
        <div className="p-1">
            <MainBodyRoutes cartItems={cartItems} inventory={inventory}
                            onCartItemsChange={onCartItemsChange} onOrderFromShopWindow={onOrderFromShopWindow}/>
        </div>
    );
}

export default MainBody;