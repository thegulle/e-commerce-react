import { Container, Typography, Paper, Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CartCheckout() {
  const navigate = useNavigate();
  const steps = ['Shipping address', 'Payment Details', 'Review your order'];

  return (
    <Container>
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        marginTop: 2,
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.05)'
      }}>
        <Typography variant="h3" fontWeight={400} mb={5}>
          Checkout
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={steps.length} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5
        }}>
          <Typography variant="h4" fontWeight={400}>
            Thank you for your purchase!
          </Typography>
          <Typography variant="body1" fontWeight={400}>
            Your order number is #{new Date().getTime()}. We have emailed your order confirmation, and will send you an update when your order has shipped.
          </Typography>
          <Button variant='contained' sx={{ marginTop: 4 }} onClick={() => navigate('/products')}>
            Continue Shopping
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}