import { Grid, Container, Box, Typography } from '@mui/material';
import Image from 'components/UI/Image';
import PromoBG from 'images/promo-bg.png';

export default function PromoContainer() {
  return (
    <Box className='promo-container'>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6} className="text-container">
            <Grid container>
              <Grid item xs={12} md={12} lg={12} mb={2}>
                <Typography variant="span" component="span">
                  Family Setup
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h1" component="h1">
                  Your family,
                </Typography>
                <Typography variant="h1" component="h1">
                  joined at the wrist.
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h6" component="p">
                  With Family Setup, you can use your iPhone to pair watches for your children or older adults who don’t have their own iPhone.15
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grid container>
              <Image src={PromoBG} className='promo-img' alt="bg" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
