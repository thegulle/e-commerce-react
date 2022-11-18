import { Link } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { useDispatch } from "react-redux";
import { Box, Typography, Tooltip, Button, IconButton, Grid } from "@mui/material"
import { storeCartAsync } from "store/CartSlice";
import priceFormat from "utils/priceFormat";
import Image from "components/UI/Image";
import Color from "components/Variant/Color";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const snackBarOptions = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 2000
  }
  const addWishList = () => {
    enqueueSnackbar('Added to wishlist', {
      variant: 'success',
      ...snackBarOptions
    });
  }
  const addCompare = () => {
    enqueueSnackbar('Added to Compare', {
      variant: 'success',
      ...snackBarOptions
    });
  }
  const addCart = (product) => {
    dispatch(storeCartAsync(product));
    enqueueSnackbar('Added to Cart', {
      variant: 'success',
      ...snackBarOptions
    });
  }

  return (
    <Box className="product-card-container">
      <Link to={`/products/${product.id}`}>
        <Box className={product.images[1] ? 'switch-img product-card-img-container' : 'product-card-img-container'}>
          <Image
            src={product.images[0]}
            alt={'product_img'} />

          {product.images[1] &&
            <Image
              src={product.images[1]}
              alt={'product_img_2'} />
          }
        </Box>
        <Box className="product-card-info-container">
          <Box className="product-card-info-container__title">
            <Typography component="h1">{product.name}</Typography>
          </Box>
          <Box className="product-card-info-container__price">
            <Typography component="span">{priceFormat(product.price)}</Typography>
          </Box>
        </Box>
        {product.variants.length > 0 &&
          <Grid container justifyContent='center' mb={2}>
            {
              product.variants.map(v => (
                <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }} key={v.color}>
                  <Color color={v.color} />
                </Grid>
              ))
            }
          </Grid>
        }
      </Link>
      <Box className="product-card-top-buttons">
        <Tooltip title="Add Wishlist" onClick={() => addWishList()}>
          <IconButton className="product-card-top-buttons__wishlist">
            <i className="ph-heart"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Compare" onClick={() => addCompare()}>
          <IconButton className="product-card-top-buttons__compare">
            <i className="ph-swap"></i>
          </IconButton>
        </Tooltip>
      </Box>
      <Box className="product-card-bottom-buttons">
        <Button
          onClick={() => addCart(product)}
          color="primary"
          variant="contained"
          className="product-card-bottom-buttons__add-to-cart">
          Add to cart
        </Button>
      </Box>
    </Box>
  )
}
