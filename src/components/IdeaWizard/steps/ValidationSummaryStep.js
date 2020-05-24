import React, { useContext, useState } from 'react';
import { WizardState } from '../WizardState';
import { ContinueButn, BackButn } from '../../Buttons';
import { ButtonWrapper, Header, Main } from '../../Styling';
import Slider from '@material-ui/core/Slider';

import styled from 'styled-components';

const QuestionCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  margin: 20px 0;
`;

const QuestionCardTitle = styled.h3`
  margin: 20px;
`;

const QuestionCardBottom = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e6e6e6;
  width: 100%;
  padding: 20px 50px;
  border-radius: 0 0 8px 8px;
  border-top: 2px solid black;
`;

const SetImpactLabel = styled.label`
font-size: 12px;
text-align: center;
color white;
background-color: black;
padding: 10px;
border-radius: 20px;
transform: translateY(50%);
`;

const QuestionCard = ({ id, title, weight, min = 0, max = 10 }) => {
  const { state, dispatch } = useContext(WizardState);
  const { questions } = state;

  const [sliderValue, setSliderValue] = useState(weight);

  const onChange = (_, value) => setSliderValue(value);

  const onChangeCommited = (_, value) => {
    const localQuestions = [...questions];

    localQuestions.forEach((category) => {
      category.questions.forEach((question) => {
        if (question.id === id) {
          question.weight = value;
        }
      });
    });

    dispatch({ questions: localQuestions });
  };

  return (
    <QuestionCardWrapper>
      <QuestionCardTitle>{title}</QuestionCardTitle>
      <SetImpactLabel htmlFor={id}>
        Set the impact on this question:
      </SetImpactLabel>
      <QuestionCardBottom>
        <Slider
          name={id}
          value={sliderValue}
          onChange={onChange}
          onChangeCommitted={onChangeCommited}
          step={0.1}
          min={min}
          max={max}
          marks={[
            { value: min, label: 'Low impact' },
            { value: max, label: 'High impact' },
          ]}
        />
      </QuestionCardBottom>
    </QuestionCardWrapper>
  );
};

const ValidationSummaryStep = ({ nextStep, prevStep }) => {
  const { state } = useContext(WizardState);
  const { questions } = state;

  return (
    <>
      <Header>
        <h1>
          Now let’s review your validation and the impact on your questions.
        </h1>
      </Header>
      <Main>
        <ol
          style={{
            paddingLeft: '20px',
            clear: 'both',
          }}
        >
          {questions
            .filter(({ include }) => include === true)
            .map(({ category, questions, index }) => (
              <li>
                <h2>{category}</h2>
                {index}
                <ul style={{ padding: 0 }}>
                  {questions
                    .filter(({ include }) => include === true)
                    .map(({ id, title, weight }) => (
                      <QuestionCard
                        key={id}
                        id={id}
                        title={title}
                        weight={weight}
                      />
                    ))}
                </ul>
              </li>
            ))}
        </ol>
      </Main>
      <ButtonWrapper>
        <ContinueButn onClick={nextStep}>Continue</ContinueButn>
        <BackButn onClick={prevStep}>Go back</BackButn>
      </ButtonWrapper>
    </>
  );
};

export default ValidationSummaryStep;
