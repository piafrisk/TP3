import React, { useContext } from 'react';
import { WizardState, WizardStateProvider } from './WizardState';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { UserContext } from '../../contexts/UserContext';

import GetStartedStep from './steps/GetStartedStep';
import ChooseTemplateStep from './steps/ChooseTemplateStep';
import DescribeIdeaStep from './steps/DescribeIdeaStep';
import DescribeIdeaSteps from './steps/DescribeIdeaSteps';
import ValidationSetupSteps from './steps/ValidationSetupSteps';
import ValidationSummaryStep from './steps/ValidationSummaryStep';
import ShareStep from './steps/ShareStep';
import ConfirmationStep from './steps/ConfirmationStep';

import { GridContainer } from '../Styling';

const Wizard = () => {
  const firebase = useContext(FirebaseContext);
  const user = useContext(UserContext);
  const { state, dispatch } = useContext(WizardState);
  const { steps, ideaId } = state;

  const stepIndex = steps.length - 1;
  const step = parseInt(steps[stepIndex]);

  const nextStep = () => dispatch({ steps: [...steps, step + 1] });
  const prevStep = () => dispatch({ steps: [...steps].slice(0, stepIndex) });

  // TODO..
  const writeToFirestore = () => {
    const userId = user.uid;
    const db = firebase.firestore();

    if (!ideaId) {
      db.collection('ideas')
        .add(state)
        .then(({ id }) => {
          dispatch({ ideaId: id });

          db.collection('users')
            .doc(userId)
            .update({
              ideas: firebase.firestore.FieldValue.arrayUnion(ideaId),
            });
        });
      return;
    }
    db.collection('ideas').doc(ideaId).set(state);
  };

  const wizardSteps = [
    <GetStartedStep nextStep={nextStep} />,
    <ChooseTemplateStep nextStep={nextStep} />,
    <DescribeIdeaStep nextStep={nextStep} prevStep={prevStep} />,
    <DescribeIdeaSteps />,
    <ValidationSetupSteps />,
    <ValidationSummaryStep nextStep={nextStep} prevStep={prevStep} />,
    <ShareStep nextStep={nextStep} />,
    <ConfirmationStep />,
  ];

  const stepComponent = wizardSteps[step];

  return <GridContainer>{stepComponent}</GridContainer>;
};

const WizardContextWrapper = () => (
  <WizardStateProvider>
    <Wizard />
  </WizardStateProvider>
);

export default WizardContextWrapper;
