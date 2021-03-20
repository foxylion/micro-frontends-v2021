import * as React from 'react';

import { Grid, makeStyles, Typography } from '@material-ui/core';
import { productsById } from 'fake-backend';

import { CheckoutBuyButton, InspireSimilarProducts } from '../remote';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '400px',
  },
}));

export const ProductPage: React.FC<{ productId: string }> = (props) => {
  const product = React.useMemo(() => productsById[props.productId], [props.productId]);
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">{product.name}</Typography>
      </Grid>

      <Grid item>
        <img src={product.imageUrl} alt={`Photo of a ${product.name}`} className={classes.image} />
      </Grid>

      <Grid item>
        {product.descriptionLong.split('\n').map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </Grid>

      <Grid item>
        <CheckoutBuyButton productId={product.productId} />
      </Grid>

      <Grid item>
        <InspireSimilarProducts productId={product.productId} />
      </Grid>
    </Grid>
  );
};
