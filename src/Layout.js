import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
    palette: {
      primary: {
        main: green[700],
      }
    },
  });

export const Layout = ({children}) => {

    let navigate = useNavigate()

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1}}>
                {/* topnar with information */}
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        SOLARSTAV
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/')}>Galeria</Button>
                    <Button color="inherit" onClick={() => navigate('/quotation')}>Cotizacion</Button>
                    <Button color="inherit" onClick={() => navigate('/about')}>¿Quienes somos?</Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm">
                    {children}
                </Container>
                {/* Bottom Bar with information  */}
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
                            Pelon
                        </Typography> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}