import * as React from 'react';

import {
  Button,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import { productsById } from 'fake-backend';
import { priceFormatter } from '../utils/priceFormatter';
import { Alert } from '@material-ui/lab';
import { SimilarProducts, ProductOverview } from '../remote';

import useLocalStorageState from 'use-local-storage-state';
import { Order } from '../utils/Order';

const useStyles = makeStyles(() => ({
  totals: {
    fontWeight: 'bold',
  },
}));

export const CheckoutPage: React.FC<{ productId: string }> = (props) => {
  const classes = useStyles();

  const [ordersStorage, setOrders] = useLocalStorageState<Order[]>('orders');
  const orders = ordersStorage ?? [];

  const product = React.useMemo(() => productsById[props.productId], [props.productId]);

  React.useEffect(() => {
    setBuyEnd(false);
  }, [product]);

  const [buyEnd, setBuyEnd] = React.useState(false);

  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');

  const totalPrice = product.price + 500 + 1250 + product.price / 4;

  const buy = () => {
    setBuyEnd(true);
    setOrders([
      ...orders,
      {
        tractorName: product.name,
        buyerName: name,
        address,
        city,
        country,
        price: totalPrice,
        date: new Date().getTime(),
      },
    ]);
  };

  return !buyEnd ? (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">Buy Your Tractor</Typography>
      </Grid>

      <Grid item container spacing={2}>
        <Grid item sm={8}>
          <ProductOverview productId={product.productId} />
        </Grid>

        <Grid item sm={4}>
          <Typography variant="h6">Pricing</Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Tractor price</TableCell>
                <TableCell align="right">{priceFormatter.format(product.price)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Transport costs</TableCell>
                <TableCell align="right">{priceFormatter.format(500)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Paintwork cost</TableCell>
                <TableCell align="right">{priceFormatter.format(1250)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Extra equipment
                  <br />
                  (mandatory)
                </TableCell>
                <TableCell align="right">{priceFormatter.format(product.price / 4)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.totals}>Total Cost</TableCell>
                <TableCell className={classes.totals} align="right">
                  {priceFormatter.format(totalPrice)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="h6">Checkout</Typography>
      </Grid>

      <Grid item xs={6} container direction="column" spacing={2}>
        <Grid item>
          <TextField label="Name" fullWidth={true} value={name} onChange={(e) => setName(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Address" fullWidth={true} value={address} onChange={(e) => setAddress(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="City" fullWidth={true} value={city} onChange={(e) => setCity(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="Country" fullWidth={true} value={country} onChange={(e) => setCountry(e.target.value)} />
        </Grid>
      </Grid>

      <Grid item>
        <Button color="primary" variant="contained" disabled={!name || !address || !city || !country} onClick={buy}>
          Pay&nbsp;
          {priceFormatter.format(totalPrice)}
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">Checkout Completed</Typography>
      </Grid>
      <Grid item>
        <Alert severity="success">
          Congratulations {name}! It is now official - <b>{product.name}</b> is yours!
        </Alert>
      </Grid>
      <Grid item>
        <Typography variant="h5">Let's get inspired</Typography>
        <Typography>
          Other farmers who bought {product.name} also bought other tractors. Maybe you want to buy another one?
        </Typography>
      </Grid>
      <Grid item>
        <SimilarProducts productId={product.productId} />
      </Grid>
    </Grid>
  );
};
