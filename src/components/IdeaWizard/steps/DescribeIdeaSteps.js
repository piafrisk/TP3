import React, { useContext } from 'react';
import { WizardState } from '../WizardState';

import { Dropdown, Textarea, Attachments } from '../../InputFields';
import MultiStepInput from '../MultiStepInput';

const DescribeIdeaSteps = () => {
  const { state, dispatch } = useContext(WizardState);
  const { targetAudience, descriptions, template } = state;

  const describeIdeaStepsArray = [
    {
      title:
        '“Elevator Pitch” time! Describe your idea in a clear and consise way:',
      inputComponent: (
        <Dropdown
          name="targetAudience"
          label="Who is your idea for?"
          options={['Customer', 'Developer', 'Business']}
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
      ),
    },
    {
      title: `Who are your ${targetAudience}?`,
      inputComponent: (
        <Textarea
          name="who"
          label={`What does your ${targetAudience} do today that can be improved?`}
          placeholder="Describe what the behaviour of your customers are today. We need to understand who they are what they do that can be improved."
          value={descriptions['who']}
          onChange={(e) =>
            dispatch({
              descriptions: {
                ...descriptions,
                [e.target.name]: e.target.value,
              },
            })
          }
        />
      ),
    },
    {
      title: 'What is your idea?',
      inputComponent: (
        <Textarea
          name="what"
          label="What is your idea?"
          placeholder="Describe your solution. What is it?"
          value={descriptions['what']}
          onChange={(e) =>
            dispatch({
              descriptions: {
                ...descriptions,
                [e.target.name]: e.target.value,
              },
            })
          }
        />
      ),
    },
    {
      title: 'How will your idea work?',
      inputComponent: (
        <Textarea
          name="how"
          label="How will your idea work?"
          placeholder="Describe your solution. How will it work?"
          value={descriptions['how']}
          onChange={(e) =>
            dispatch({
              descriptions: {
                ...descriptions,
                [e.target.name]: e.target.value,
              },
            })
          }
        />
      ),
    },
    {
      title: 'What are the core benefits of your idea?',
      inputComponent: (
        <Textarea
          name="benefits"
          label="What are the benefits with your idea?"
          placeholder="And how does it differ from competitors etc. Describe the key benefits of your idea."
          value={descriptions['benefits']}
          onChange={(e) =>
            dispatch({
              descriptions: {
                ...descriptions,
                [e.target.name]: e.target.value,
              },
            })
          }
        />
      ),
    },
    {
      title: `Why should your ${template?.title} be implemented?`,
      inputComponent: (
        <Textarea
          name="why"
          label="Why is your idea the one?"
          placeholder="Describe why your idea is the one and why you should do it?"
          value={descriptions['why']}
          onChange={(e) =>
            dispatch({
              descriptions: {
                ...descriptions,
                [e.target.name]: e.target.value,
              },
            })
          }
        />
      ),
    },
    {
      title:
        'Fantastic! You can now attach additional files that describes your idea below. ',
      inputComponent: <Attachments />,
    },
  ];

  return (
    <MultiStepInput
      stepsArray={describeIdeaStepsArray}
      progressText={`Steps to describe your ${template?.title.toLowerCase()}`}
    />
  );
};

export default DescribeIdeaSteps;
