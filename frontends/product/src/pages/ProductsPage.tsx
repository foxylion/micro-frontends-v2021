import * as React from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';

import { CheckoutBuyButton, HighlightedProducts } from '../remote';
import { products } from 'fake-backend';
import { history } from 'microfrontend-react';

const useStyles = makeStyles(() => ({
  productCard: {
    display: 'flex',
    width: '100%',
  },
  productImage: {
    width: '200px',
    flexShrink: 0,
  },
  productImageDiv: {
    width: '100%',
    height: '100%',
  },
}));

export const ProductsPage: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">All Our Tractors</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h5">Most Wanted Tractors</Typography>
        <HighlightedProducts />
      </Grid>

      <Grid item container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.productId}>
            <Card className={classes.productCard}>
              <CardActionArea
                onClick={() => history().push(`/product/${product.productId}`)}
                className={classes.productImage}
              >
                <CardMedia image={product.imageUrl} className={classes.productImageDiv} />
              </CardActionArea>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>{product.description}</Typography>
                <CheckoutBuyButton productId={product.productId} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
