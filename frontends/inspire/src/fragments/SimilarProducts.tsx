import * as React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { ProductCard } from '../components/ProductCard';
import { randomProducts } from '../utils/randomProducts';

export const SimilarProducts: React.FC = () => {
  const productIds = React.useMemo(() => randomProducts(3).map((item) => item.productId), []);
  return (
    <Grid item>
      <Grid container spacing={2}>
        {productIds.map((productId) => (
          <Grid item sm={4} key={productId}>
            <ProductCard productId={productId} featuredBadge={false} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
