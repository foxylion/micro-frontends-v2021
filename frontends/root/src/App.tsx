import * as React from "react";

import { ProductDetailsPage } from "./remotes";

export const App: React.FC = () => {
  const [load, setLoad] = React.useState(false);
  return (
    <div>
      <h1>Tractor Store</h1>
      {load ? (
        <ProductDetailsPage productId="fendt-f20" />
      ) : (
        <button onClick={() => setLoad(true)}>Load Product Details</button>
      )}
    </div>
  );
};
