import React, { useContext } from 'react';
import { WizardState } from './WizardState';

import { ContinueButn, BackButn } from '../Buttons';
import { ButtonWrapper, Header, Main, Footer } from '../Styling';

const ProgressDots = ({ text, currentStep, length }) => (
  // TODO: replace last paragraph with dots
  <>
    <p>{text}</p>
    <p>
      Step {currentStep} of {length}
    </p>
  </>
);

const MultiStepInput = ({ stepsArray, progressText }) => {
  const { state, dispatch } = useContext(WizardState);
  const { steps } = state;

  const stepIndex = steps.length - 1;
  const step = steps[stepIndex];
  const subStep = Number(step.toFixed(1)[2]);

  const incrementSubStep = (step * 10 + 0.1 * 10) / 10; // why? ...beacuse javascript
  const incrementStep = parseInt(step + 1); // to remove substep decimal

  const nextStep = () =>
    subStep < stepsArray.length - 1
      ? dispatch({ steps: [...steps, incrementSubStep] })
      : dispatch({ steps: [...steps, incrementStep] });

  const prevStep = () => dispatch({ steps: [...steps].slice(0, stepIndex) });

  const { title, subtitile, inputComponent } = stepsArray[subStep];

  return (
    <>
      <Header>
      <h1>{title}</h1>
      {
        subtitile ?
        <p style={{width : '70%',margin: 'auto'}}>{subtitile}</p>
        :
        null
      }
      </Header>      
      <Main>{inputComponent}</Main>
      <ButtonWrapper>
        <ContinueButn onClick={nextStep}>Continue</ContinueButn>
        <BackButn onClick={prevStep}>Go back</BackButn>
      </ButtonWrapper>
      <Footer>
        <ProgressDots
          text={progressText}
          currentStep={subStep + 1}
          length={stepsArray.length}
        />
      </Footer>
    </>
  );
};

export default MultiStepInput;
