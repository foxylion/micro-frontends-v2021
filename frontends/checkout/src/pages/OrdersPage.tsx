import * as React from 'react';

import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { priceFormatter } from '../utils/priceFormatter';
import { Alert } from '@material-ui/lab';
import { HighlightedProducts } from '../remote';

import useLocalStorageState from 'use-local-storage-state';
import { Order } from '../utils/Order';
import { dateFormatter } from '../utils/dateFormatter';

export const OrdersPage: React.FC<{ productId: string }> = (props) => {
  const [ordersStorage] = useLocalStorageState<Order[]>('orders');
  const orders = ordersStorage ?? [];

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h4">Your Order History</Typography>
      </Grid>

      {orders.length == 0 ? (
        <>
          <Grid item>
            <Alert severity="warning">You haven't bought anything yet.</Alert>
          </Grid>
          <Grid item>
            <Typography variant="h5">Get Inspired!</Typography>
            <HighlightedProducts />
          </Grid>
        </>
      ) : (
        <Grid item>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tractor</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Shipping Address</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.date}>
                  <TableCell>{order.tractorName}</TableCell>
                  <TableCell>{priceFormatter.format(order.price)}</TableCell>
                  <TableCell>{dateFormatter.format(order.date)}</TableCell>
                  <TableCell>
                    {order.buyerName}, {order.address}, {order.city}, {order.country}
                  </TableCell>
                  <TableCell>
                    <Alert severity="success">Delivered!</Alert>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      )}
    </Grid>
  );
};
