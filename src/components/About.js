import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const MediaCard = () => {
  return (
    <Box>
        <Card>
        <CardMedia
            component="img"
            image="https://solarstav.com/uploads/3/5/3/8/35386894/01ed18ed-cda4-41bb-80d9-61b468b4c722_orig.jpg"
            alt="SolarStavTEAM"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
            Equipo profesional de Ingenieros
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Diseñamos, calculamos e instalamos bajo la supervision y presencia de nuestro Gerente General Luigi Antonini
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Ofrecemos equipos europeos y norteamericanos de la mejor calidad, reconocidos mundialmente
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Diseñamos a la medida y construimos las estructuras
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Nuestras estructuras son minimalistas para obtener belleza e impactar lo menos posible la estética
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ✔️ Empresa certificada FIDE
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ✔️ Más de 35 años de experiencia
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ✔️ Calculamos, diseñamos e instalamos
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ✔️ Más de 170 proyectos exitosos en los últimos 5 años
            </Typography>
        </CardContent>
        </Card>
    </Box>
  );
}

export const About = () => {

    return (
        <Box padding={ 3 }>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
                Servicios de Ingenieria Fotovoltaica
            </Typography>   
            <MediaCard />
            {/* <BasicTabs /> */}
        </Box>
    )

}