import React, { useContext } from 'react';
import { WizardState } from '../WizardState';
import { Header, Main, CenterWraper } from '../../Styling';
import { ChoiseButton } from '../../Buttons';

const ChooseTemplateStep = ({ nextStep }) => {
  const { dispatch } = useContext(WizardState);

  const onClick = (e) => {
    dispatch({ template: JSON.parse(e.target.value) });
    nextStep();
  };

  // TODO: replace mock ???
  const templates = [
    { id: 0, title: 'Product Epic' },
    { id: 1, title: 'Creative idea' },
    { id: 2, title: 'Product or Service' },
    { id: 3, title: 'Open Field' },
  ];

  return (
    <>
      <Header>
        <h1>Great! Now choose a what do you want to evaluate?</h1>
      </Header>
      <Main>
        <CenterWraper>
          {templates.map((template) => (
            <ChoiseButton
              onClick={onClick}
              value={JSON.stringify(template)}
              key={template.id}
            >
              {template.title}
            </ChoiseButton>
          ))}
        </CenterWraper>
      </Main>
    </>
  );
};

export default ChooseTemplateStep;
