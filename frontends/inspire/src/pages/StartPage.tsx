import * as React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { ProductCard } from '../components/ProductCard';
import { randomProducts } from '../utils/randomProducts';

export const StartPage: React.FC = () => {
  const productIds = React.useMemo(() => randomProducts(3).map((item) => item.productId), []);

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">Welcome on the The Famous Tractor Store</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h5"> Todays Highlights</Typography>
        <Grid container spacing={2}>
          {productIds.map((productId) => (
            <Grid item sm={4} key={productId}>
              <ProductCard productId={productId} featuredBadge={true} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
