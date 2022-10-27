import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath:
      'https://solarstav.com/uploads/3/5/3/8/35386894/dji-0014.jpg',
  },
  {
    label: '',
    imgPath:
      'https://solarstav.com/uploads/3/5/3/8/35386894/parte-de-atras.jpg',
  },
  {
    label: '',
    imgPath:
      'https://solarstav.com/uploads/3/5/3/8/35386894/1.jpg',
  },
  {
    label: '',
    imgPath:
      'https://solarstav.com/uploads/3/5/3/8/35386894/published/bor-arriba-1.jpg?1496921603',
  },
];

export const SwipeableTextMobileStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function BasicTabs() {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Experiencia" {...a11yProps(0)} />
            <Tab label="Proyectos" {...a11yProps(1)} />
            <Tab label="Creditos" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                🌞 Contamos con mas de 35 años de experiencia en Energia Sustentable
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                🌞 Más de 170 proyectos realizados en los ultimos 5 años con absoluto exito
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                🌞 Diseñamos calculamos e instalamos
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                Algunos de nuestro casos de exito
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                🏡 Planta solar de 10,0 Kw en El Campanario
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                🌞 Postes solares en planta de alimentos AnnOBrien
            </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                Contamos con las mejores opciones de financiamiento
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                ✔  Credito FIDE para inversión electrica
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                ✔ Credito CI Banco para residencias
            </Typography>
        </TabPanel>
      </Box>
    );
  }

export const Galery = () => {
    return  (
        <Box padding={ 5 }>     
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
                Servicios de Ingenieria Fotovoltaica
            </Typography>   
            <SwipeableTextMobileStepper />
            <BasicTabs />
        </Box>
    )
}