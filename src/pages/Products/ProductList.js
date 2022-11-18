import { useEffect } from 'react'
import { Box, Grid, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync, reset } from "store/ProductSlice";
import { TopFilter, SideFilter } from "components/FilterCards";
import Banner from "components/Banner";
import ProductCard from "components/ProductCard";
import RouteTransition from 'theme/RouteTransition';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.data);
  const filterOptions = useSelector((state) => state.productSlice.filter_options);
  useEffect(() => {
    dispatch(getProductsAsync())
  }, [dispatch, filterOptions])

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])
  return (
    <>
      <Box>
        <Banner
          title="Above. Beyond.And back again."
          src="https://media.wired.com/photos/620ec99bc14aa6d334a5d91c/master/pass/Gear-Apple-Watch-Fitness-Tracker.jpg"
          srcWidth={350} />
      </Box>
      <Box mb={2}>
        <Container maxWidth="lg">
          <Grid container spacing={2} mt={5}>
            <Grid item xs={12} md={3}>
              <SideFilter />
            </Grid>
            <Grid item xs={12} md={9} mb={30} sx={{ minHeight: '400px' }}>
              <TopFilter />
              <RouteTransition keyValue={JSON.stringify(filterOptions)}>
                <Grid container spacing={4}>
                  {products.map((product) => (
                    <Grid item xs={12} md={6} lg={4} key={product.id} >
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                </Grid>
              </RouteTransition>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ProductList;