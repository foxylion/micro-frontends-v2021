import * as React from 'react';
import { productsById } from '../../../libs/fake-backend/dist';

export const DetailsPage: React.FC<{ productId: string }> = (props) => (
  <div>
    <h2>Product Details Page for {productsById[props.productId].name}</h2>
    <img src={productsById[props.productId].imageUrl} alt={productsById[props.productId].name} height="250px" />
    <p>{productsById[props.productId].description}</p>
  </div>
);
