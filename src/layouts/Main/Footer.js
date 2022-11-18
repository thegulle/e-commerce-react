import { Box, Container } from "@mui/material"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        width: '100%',
        mb: 0,
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <p>© 2021 TechStore, Inc. All rights reserved.</p>
        </Box>
      </Container>
    </Box>
  )
}
