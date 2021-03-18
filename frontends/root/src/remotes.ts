import { createRemoteComponent } from "microfrontend-react";

export const ProductDetailsPage = createRemoteComponent<{ productId: string }>("product", "./Pages", "DetailsPage");
