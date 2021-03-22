import * as React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { ProductCard } from '../components/ProductCard';
import { randomProducts } from '../utils/randomProducts';
import { HighlightedProducts } from '../fragments/HighlightedProducts';

export const StartPage: React.FC = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">Welcome on the The Famous Tractor Store</Typography>
        <Typography>
          The tractor store has a long history. Since 1569 we are selling tractors on the web. We call ourselves the
          most experienced tractor sellers in Europe, America, Asia and Africa.
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h5"> Todays Highlights</Typography>
        <HighlightedProducts />
      </Grid>
    </Grid>
  );
};
