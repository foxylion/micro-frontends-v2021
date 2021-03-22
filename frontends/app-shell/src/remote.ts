import { createRemoteComponent } from 'microfrontend-react';

export const StartPage = createRemoteComponent<{}>('inspire', 'pages', 'StartPage');
export const ProductPage = createRemoteComponent<{ productId: string }>('product', 'pages', 'ProductPage');
export const ProductsPage = createRemoteComponent<{}>('product', 'pages', 'ProductsPage');
export const CheckoutPage = createRemoteComponent<{ productId: string }>('checkout', 'pages', 'CheckoutPage');
export const OrdersPage = createRemoteComponent<{}>('checkout', 'pages', 'OrdersPage');
