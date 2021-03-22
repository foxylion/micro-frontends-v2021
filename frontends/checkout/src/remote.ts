import { createRemoteComponent } from 'microfrontend-react';

export const SimilarProducts = createRemoteComponent<{ productId: string }>('inspire', 'fragments', 'SimilarProducts');
export const HighlightedProducts = createRemoteComponent<{}>('inspire', 'fragments', 'HighlightedProducts');
export const ProductOverview = createRemoteComponent<{ productId: string }>('product', 'fragments', 'ProductOverview');
