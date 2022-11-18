import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton, MenuList, MenuItem, Popper, Paper, ClickAwayListener, Grow, Badge, Box, Typography, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCartAsync, getCartAsync } from 'store/CartSlice'
import priceFormat from 'utils/priceFormat';
import EmptyContent from 'components/EmptyContent';

function CartMenu() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartSlice.cart);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleRemoveFromCart = (id) => {
    dispatch(deleteCartAsync(id))
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    dispatch(getCartAsync());
  }, [dispatch]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'cart-menu-container' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="white"
      >
        <Badge badgeContent={cartItems.length} invisible={!cartItems.length} color="third">
          <i className="ph-shopping-cart-simple cart-icon"></i>
        </Badge>
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="cart-menu-container"
                  aria-labelledby="composition-button"
                >
                  <Link className='cart-menu__navigate-btn' to='/cart'>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={handleClose}
                      startIcon={<i className="ph-shopping-cart-simple cart-icon"></i>}
                    >
                      Go to Cart
                    </Button>
                  </Link>
                  {cartItems.length > 0 && cartItems.map((item) => (
                    <MenuItem key={item.id} className="cart-menu-item">
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                          <Box className="cart-menu-item__image">
                            <img src={item.images[0]} alt={item.name} />
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box className="cart-menu-item__info">
                            <Typography component="h1">{item.name}</Typography>
                            <Typography component="span">{priceFormat(item.price)}</Typography>
                            <Typography component="span">Quantity : {item.quantity}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <Box className="cart-menu-item__action">
                            <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                              <i className="ph-trash-simple"></i>
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </MenuItem>
                  ))}
                  {cartItems.length === 0 && <EmptyContent />}
                  <Box className="cart-menu-item__summary">
                    <Typography component="h6" textAlign="left">Total :</Typography>
                    <Typography component="span" textAlign="right">{priceFormat(cartTotal)}</Typography>
                  </Box>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default React.memo(CartMenu);