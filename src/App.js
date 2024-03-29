import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Homelayout from "./layouts/Homelayout";
import ProductLayout from "./layouts/ProductLayout";
import ShoppingCartLayout from "./layouts/ShoppingCartLayout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CheckOutLayout from "./layouts/CheckOutLayout";
import PageNotFound from "./components/PageNotFound";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Homelayout />,
        },
        {
          path: "/product/:productId",
          element: <ProductLayout />,
        },
        {
          path: "/cart",
          element: <ShoppingCartLayout />,
        },
        {
          path: "/checkout",
          element: <CheckOutLayout />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
