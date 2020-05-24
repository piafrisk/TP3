import React from 'react';
import { ChoiseButton } from '../../Buttons';
import { Header, Main, CenterWraper } from '../../Styling';

const GetStartedStep = ({ nextStep }) => (
  <>
    <Header>
      <h1>Let’s get started!</h1>
      <p>Start from template or validate based on import from other services</p>
    </Header>
    <Main>
      <CenterWraper>
        {' '}
        <ChoiseButton onClick={nextStep}>Create a new idea</ChoiseButton>
      </CenterWraper>
      {/* // TODO: import from other service */}
    </Main>
  </>
);

export default GetStartedStep;
