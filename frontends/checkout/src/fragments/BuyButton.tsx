import { Button } from '@material-ui/core';
import * as React from 'react';

import { productsById } from 'fake-backend';

export const BuyButton: React.FC<{ productId: string }> = (props) => {
  const product = React.useMemo(() => productsById[props.productId], [props.productId]);

  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <Button color="primary" variant="outlined">
      Buy for {formatter.format(product.price)}
    </Button>
  );
};
