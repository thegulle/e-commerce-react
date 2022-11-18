import { Box, Container, Grid, Typography } from "@mui/material"
import Image from "components/UI/Image"

export default function Banner({ title, subTitle, src, srcWidth }) {
  return (
    <Box className="banner">
      <Container>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Grid container spacing={0}>
              <Grid item xs={8}>
                <Typography variant="h6" component="h6">
                  {title}
                </Typography>
              </Grid>
              {
                subTitle &&
                <Grid item xs={12}>
                  <Typography variant="p" component="p">
                    {subTitle}
                  </Typography>
                </Grid>
              }
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="banner__image_container">
            <Image src={src} width={srcWidth ? srcWidth : '100%'} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
