import { createRemoteComponent } from 'microfrontend-react';

export const CheckoutBuyButton = createRemoteComponent<{ productId: string }>('checkout', 'fragments', 'BuyButton');
