import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from 'react-bootstrap/Button';
import Paper from '@mui/material/Paper';

const steps = [
  {
    school: 'Prooftag Catis S.A',
    diploma: `End of studies internship`,
    year: 'début Février 2025 - Fin Juillet 2025',
  },
  {
    school: 'Prooftag Catis S.A',
    diploma: `Pre-engineering internship`,
    year: 'début Juillet 2024 - Fin Août 2024',
  },
  {
    school: 'Prooftag Catis S.A',
    diploma: `Assistant engineer internship`,
    year: 'début Juillet 2023 - Fin Août 2023',
  }
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <h3
        style={{
          color: '#7E74F1',
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 700,
          marginBottom: '24px',
        }}
      >
        Professional Background
      </h3>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.school}>
            <StepLabel>
              <h4
                style={{
                  color: '#6C757D',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: '15px',
                  margin: '0',
                }}
              >
                {step.school}
              </h4>
            </StepLabel>
            <StepContent>
              <h5 className="my-2">{step.diploma}</h5>
              <h6
                className="mt-2 mb-4"
                style={{ color: '#6C757D', fontFamily: 'Plus Jakarta Sans' }}
              >
                {step.year}
              </h6>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    className="btn btn-secondary mx-2"
                    style={{ backgroundColor: '#7E74F1' }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    className="btn-secondary"
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          style={{
            color: '#6C757D',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '12 px',
            margin: '0',
            background: 'transparent',
          }}
          square
          elevation={0}
          sx={{ p: 3 }}
        >
          <p>
            You have completed my career path, 
            click if you wish to start again
          </p>
          <Button
            style={{ backgroundColor: '#7E74F1' }}
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
