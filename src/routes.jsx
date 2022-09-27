import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import CartItems from "./features/cart/components/cart-items.component";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'users',

    },
    {
        path: 'cart',
        element: <CartItems />
    }
]);

export default routes;