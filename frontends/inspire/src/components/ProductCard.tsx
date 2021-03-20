import * as React from 'react';

import { Badge, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import { productsById } from 'fake-backend';
import { history } from 'microfrontend-react';

import { CheckoutBuyButton } from '../remote';

const useStyles = makeStyles(() => ({
  badge: {
    right: -25,
  },
}));

export const ProductCard: React.FC<{ productId: string; featuredBadge: boolean }> = (props) => {
  const classes = useStyles();
  const product = React.useMemo(() => productsById[props.productId], [props.productId]);
  return (
    <Card>
      <CardActionArea onClick={() => history().push(`/product/${product.productId}`)}>
        <CardMedia image={product.imageUrl} component="img" height="200" />
      </CardActionArea>
      <CardContent>
        {props.featuredBadge ? (
          <Badge badgeContent="Featured" color="primary" classes={{ badge: classes.badge }}>
            <Typography variant="h6">{product.name}</Typography>
          </Badge>
        ) : (
          <Typography variant="h6">{product.name}</Typography>
        )}
        <p>{product.description}</p>
        <CheckoutBuyButton productId={product.productId} />
      </CardContent>
    </Card>
  );
};
