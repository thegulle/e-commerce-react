import { Navigate } from 'react-router-dom';
import { useAuth } from 'context/auth';
import Home from 'pages/Home';
import ProductsLayout from 'pages/Products';
import ProductList from 'pages/Products/ProductList';
import ProductDetail from 'pages/Products/ProductDetail';
import Cart from 'pages/Cart';
import CartList from 'pages/Cart/CartList';
import CartCheckout from 'pages/Cart/CartCheckout';
import RouteTransition from 'theme/RouteTransition';

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
  {
    path: 'products',
    name: 'Products',
    element: <ProductsLayout />,
    children: [
      {
        path: '',
        name: 'Products',
        index: true,
        element: <ProductList />,
      },
      {
        path: ':id',
        name: 'Product Detail',
        element: <ProductDetail />
      },
    ]
  },
  {
    path: 'cart',
    name: 'Cart',
    element: <Cart />,
    auth: true,
    children: [
      {
        path: '',
        name: 'Cart List',
        index: true,
        element: <CartList />,
      },
      {
        path: 'checkout',
        name: 'Cart Checkout',
        element: <CartCheckout />
      },
    ]
  }
]

const AuthLayout = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return (
      <Navigate to="/" replace />
    );
  }
  return <>{children}</>;
};

const routeController = (routes) => {
  return routes.map(route => {
    if (route.auth) {
      route.element = <AuthLayout>{route.element}</AuthLayout>
    }
    if (route.children) {
      route.children = route.children.map(child => {
        if (child.auth) {
          child.element = <AuthLayout>{child.element}</AuthLayout>
        }
        return child
      })
    }
    return route
  })
}

const routeAnimate = (routes) => {
  return routes.map(route => {
    if (route.children) {
      route.children = route.children.map(child => {
        child.element = <RouteTransition>{child.element}</RouteTransition>
        return child
      })
    } else {
      route.element = <RouteTransition>{route.element}</RouteTransition>
    }
    return route
  })
}

export default routeController(routeAnimate(routes));