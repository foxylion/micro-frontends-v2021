import { Button } from '@material-ui/core';
import * as React from 'react';

import { productsById } from 'fake-backend';
import { history } from 'microfrontend-react';
import { priceFormatter } from '../utils/priceFormatter';

export const BuyButton: React.FC<{ productId: string }> = (props) => {
  const product = React.useMemo(() => productsById[props.productId], [props.productId]);

  return (
    <Button color="primary" variant="outlined" onClick={() => history().push(`/checkout/${product.productId}`)}>
      Buy for {priceFormatter.format(product.price)}
    </Button>
  );
};
