import React, { useContext } from 'react';
import { WizardState } from '../WizardState';

import { Input } from '../../InputFields';
import { ContinueButn, BackButn } from '../../Buttons';
import { Header, Main, ButtonWrapper, CenterWraper } from '../../Styling';

const DescribeIdeaStep = ({ nextStep, prevStep }) => {
  const { state, dispatch } = useContext(WizardState);
  const { title, owner, template } = state;

  const onChange = (e) => dispatch({ [e.target.name]: e.target.value });

  return (
    <>
      <Header>
        <h1>Let’s start to descibe your {template?.title.toLowerCase()}</h1>
      </Header>
      <Main>
        <CenterWraper>
          <Input
            type="text"
            name="title"
            label="Title"
            placeholder="What do you want to call your idea?"
            value={title}
            onChange={onChange}
          />
          <Input
            type="email"
            name="owner"
            label="Owner"
            value={owner}
            onChange={onChange}
          />
        </CenterWraper>
      </Main>
      <ButtonWrapper>
        <ContinueButn onClick={nextStep}>Continue</ContinueButn>
        <BackButn onClick={prevStep}>Go back</BackButn>
      </ButtonWrapper>
    </>
  );
};

export default DescribeIdeaStep;
