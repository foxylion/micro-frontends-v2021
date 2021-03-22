import * as React from 'react';

import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { productsById } from 'fake-backend';

import { CheckoutBuyButton, SimilarProducts } from '../remote';
import { history } from 'microfrontend-react';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '400px',
  },
  breadCrumb: {
    color: '#aaa',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export const ProductPage: React.FC<{ productId: string }> = (props) => {
  const product = React.useMemo(() => productsById[props.productId], [props.productId]);
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">
          <Link className={classes.breadCrumb} onClick={() => history().push('/products')}>
            Products ›
          </Link>{' '}
          {product.name}
        </Typography>
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
        <Typography variant="h5">Similar Products</Typography>
        <SimilarProducts productId={product.productId} />
      </Grid>
    </Grid>
  );
};
