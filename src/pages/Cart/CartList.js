import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Grid, Box, Typography, Divider, Paper, Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCartAsync, deleteAllCartAsync } from 'store/CartSlice'
import CartItem from 'components/CartItem';
import priceFormat from 'utils/priceFormat';
import EmptyContent from 'components/EmptyContent';

export default function CartList() {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  const [cartTotal, setCartTotal] = useState(0);
  const snackBarOptions = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 2000
  }
  const handleRemoveFromCart = (id) => {
    dispatch(deleteCartAsync(id))
    enqueueSnackbar('Removed from Cart', {
      variant: 'success',
      ...snackBarOptions
    });
  }
  const handleCheckout = () => {
    dispatch(deleteAllCartAsync())
    navigate('/cart/checkout')
  }
  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity
    })
    setCartTotal(total)
  }, [cart])
  return (
    <Container>
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 2,
          borderRadius: 2,
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
        }}>
        <Grid container spacing={{ xs: 5, sm: 5, md: 2 }} direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}>
          <Grid item xs={12} md={9} sx={{
            borderRight: '1px solid #e0e0e0',
          }}>
            <Container>
              <Divider variant='middle'>
                <Typography variant="h6">
                  Cart
                </Typography>
              </Divider>
              <Box mt={1}>
                {cart &&
                  cart.map((product) => (
                    <CartItem key={product.id} product={product} deleteAction={handleRemoveFromCart} />
                  ))
                }
                {cart.length === 0 && <EmptyContent />}
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12} md={3}>
            <Divider variant='middle'>
              <Typography variant="h6">
                Cart Actions
              </Typography>
            </Divider>
            <Paper mt={1} sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 2,
              marginBottom: 2,
              boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="body1">
                Total:
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {priceFormat(cartTotal)}
              </Typography>
            </Paper>
            <Button variant="contained" fullWidth onClick={() => handleCheckout()} disabled={!Boolean(cart.length)}>
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
