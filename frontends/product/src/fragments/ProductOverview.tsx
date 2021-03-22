import { Typography } from '@material-ui/core';
import { productsById } from 'fake-backend';
import * as React from 'react';

export const ProductOverview: React.FC<{ productId: string }> = (props) => {
  const product = React.useMemo(() => productsById[props.productId], [props.productId]);

  return (
    <>
      <Typography variant="h6">{product.name}</Typography>
      <p>{product.description}</p>
      <img src={product.imageUrl} height={200} alt={`Picture of ${product.name}`} />
    </>
  );
};
