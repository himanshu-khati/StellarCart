import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Homelayout from "./layouts/Homelayout";
import ProductLayout from "./layouts/ProductLayout";
import ShoppingCartLayout from "./layouts/ShoppingCartLayout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
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
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
