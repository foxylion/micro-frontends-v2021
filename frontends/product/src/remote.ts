import { createRemoteComponent } from 'microfrontend-react';

export const CheckoutBuyButton = createRemoteComponent<{ productId: string }>('checkout', 'fragments', 'BuyButton');
export const SimilarProducts = createRemoteComponent<{ productId: string }>('inspire', 'fragments', 'SimilarProducts');
export const HighlightedProducts = createRemoteComponent<{}>('inspire', 'fragments', 'HighlightedProducts');
