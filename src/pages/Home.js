import { useEffect } from 'react';
import { Grid, Container, Box, CircularProgress, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getBestSellersAsync } from 'store/ProductSlice';
import ProductCard from 'components/ProductCard';
import PromoContainer from 'components/PromoContainer';
import Banner from 'components/Banner';

function Home() {
  const dispatch = useDispatch();
  const bestSellers = useSelector((state) => state.productSlice.best_sellers);
  const productsLoading = useSelector((state) => state.productSlice.loading);

  useEffect(() => {
    dispatch(getBestSellersAsync());
  }, [dispatch]);
  return (
    <>
      <PromoContainer />
      {productsLoading.best_sellers && <Box style={{ textAlign: 'center' }} mt={3}><CircularProgress color="success" /></Box>}
      {!productsLoading.best_sellers &&
        <Box mt={3} mb={10} component="section">
          <Container>
            <Typography component="h1" className='section-title'>Best Sellers</Typography>
            <Grid container spacing={2}>
              {bestSellers.map((product) => (
                <Grid item xs={12} md={6} lg={4} key={product.id} >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>}
      <Banner title="At AT&T, Everyone Gets Our Best Deals on iPhone 14 Pro" src="assets/images/banner-img.png" />
    </>
  )
}

export default Home
