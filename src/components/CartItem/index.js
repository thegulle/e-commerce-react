import { Paper, IconButton, Grid, Typography } from "@mui/material"
import Image from "components/UI/Image"
import priceFormat from "utils/priceFormat"

export default function CartItem({ product, deleteAction }) {
  return (
    <>
      <Paper sx={{
        padding: 2,
        marginBottom: 2,
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.05)'
      }}>
        <Grid container spacing={1}
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          sx={{
            alignItems: 'center'
          }}>
          <Grid item xs={12} md={3}>
            <Image src={product.images[0]} alt={product.name} width={70} />
          </Grid>
          <Grid item xs={12} md={5} sx={{
            textAlign: { xs: 'center', sm: 'center', md: 'left' }
          }}>
            <Typography variant="h6">
              {product.name}
            </Typography>
            <Typography variant="span">
              {product.quantity} Quantity
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6">
              {priceFormat(product.price)}
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}>
            <IconButton onClick={() => deleteAction(product.id)}>
              <i className="ph-trash-simple"></i>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
