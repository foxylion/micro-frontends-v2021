import { createRemoteComponent } from 'microfrontend-react';

export const InspireStartPage = createRemoteComponent<{}>('inspire', './Pages', 'StartPage');
export const ProductPage = createRemoteComponent<{ productId: string }>('product', './Pages', 'ProductPage');
