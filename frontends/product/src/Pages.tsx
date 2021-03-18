import * as React from "react";
import { data } from "./data";
import { ProductImage } from "./Fragments";

export const DetailsPage: React.FC<{ productId: string }> = (props) => (
  <div>
    <h2>Product Details Page for {data[props.productId].name}</h2>
    <ProductImage productId={props.productId} />
    <p>{data[props.productId].description}</p>
  </div>
);
