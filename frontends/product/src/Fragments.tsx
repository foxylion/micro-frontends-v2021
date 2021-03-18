import * as React from "react";
import { data } from "./data";

export const ProductImage: React.FC<{ productId: string }> = (props) => (
  <div>
    <img src={data[props.productId].image} alt={data[props.productId].name} height="250px" />
  </div>
);
