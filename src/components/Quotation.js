import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';

const steps = ['Datos de contacto', 'Tipo de instalación', 'Descripción'];

function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }} paddingTop={5} paddingBottom={5}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Opcional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Información enviada
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
                {activeStep === 0 ? (
                    <Box>
                        <TextField id="outlined-basic" label="Nombre Completo" variant="outlined" fullWidth/>
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="Dirección" variant="outlined" fullWidth/>
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="Telefono" variant="outlined" fullWidth/>
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="Correo" variant="outlined" fullWidth/>
                    </Box>
                ) : activeStep === 1  ? (
                    <Box>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Residencial" />
                            <FormControlLabel control={<Checkbox />} label="Empresa" />
                        </FormGroup>
                    </Box>
                ) : activeStep === 2 ? (
                    <Box>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Breve descripción del proyecto"
                        multiline
                        maxRows={4}
                        fullWidth
                        />
                    </Box>
                ) : null}
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
export const Quotation = () => {
    return (
        <Box paddingTop={5}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
                Llena el siguiente formulario
            </Typography>
            <HorizontalLinearStepper />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
                Y un asesor se contactara para cotizar nuestros servicios
            </Typography>
        </Box>
    )
}