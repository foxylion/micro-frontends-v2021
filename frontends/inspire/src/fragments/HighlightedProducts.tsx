import { Grid } from '@material-ui/core';
import * as React from 'react';
import { ProductCard } from '../components/ProductCard';
import { randomProducts } from '../utils/randomProducts';

export const HighlightedProducts: React.FC = () => {
  const productIds = React.useMemo(() => randomProducts(3).map((item) => item.productId), []);
  return (
    <Grid container spacing={2}>
      {productIds.map((productId) => (
        <Grid item sm={4} key={productId}>
          <ProductCard productId={productId} featuredBadge={true} />
        </Grid>
      ))}
    </Grid>
  );
};
