import React, { useContext } from 'react';
import { WizardState } from '../WizardState';
import { Header, Main } from '../../Styling';
import { Textarea } from '../../InputFields';

const ShareStep = () => {
  const { state } = useContext(WizardState);
  const { shareMessage } = state;

  return (
    <>
      <Header>
        <h1>It’s time to share your idea and validate it!</h1>
      </Header>
      <Main>
        {/* TODO: add a bunch of inputs */}
        <Textarea
          name="shareMessage"
          label="1. What do you want to say to the ones who receives this validation?"
          value={shareMessage}
        />
        {/* Add button for signUp */}
      </Main>
    </>
  );
};
export default ShareStep;
