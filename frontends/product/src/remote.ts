import { createRemoteComponent } from 'microfrontend-react';

export const CheckoutBuyButton = createRemoteComponent<{ productId: string }>('checkout', './Fragments', 'BuyButton');

export const InspireSimilarProducts = createRemoteComponent<{ productId: string }>(
  'inspire',
  './Fragments',
  'SimilarProducts'
);
