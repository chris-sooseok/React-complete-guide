import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
    {
        // ? this path is root path for children path
        // * any path that start with / is an absolute path
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [  
            {index: true, path: '/', element: <HomePage/>},
            {path: '/products', element: <Products/>},
            {path: '/products/:productId', element: <ProductDetail/>},
        ]
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>
}

export default App;
