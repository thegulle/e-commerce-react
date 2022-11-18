import { useRoutes } from 'react-router-dom';
import { Box } from '@mui/material';
import routes from 'router';
import Header from 'layouts/Main/Header';
import Footer from 'layouts/Main/Footer';


function App() {
  return (
    <>
      <Header />
      <Box className="main-content">
        {useRoutes(routes)}
      </Box>
      <Footer />
    </>
  );
}

export default App;