import React, { useContext } from 'react';
import { WizardState } from '../WizardState';

import MultiStepInput from '../MultiStepInput';
import CustomCheckBox from '../../checkbox/index'

// TODO: broken..

const ValidationSetup = () => {
  const { state, dispatch } = useContext(WizardState);
  const { questions, template } = state;

  const toggleInclude = (e) => {
    let localQuestions = [...questions];

    localQuestions.forEach((category) => {
      category.questions.forEach((question) => {
        if (question.title === e.target.id) {
          question.include = !question.include;
        }
      });
    });

    dispatch({ questions: localQuestions });
  };

  const ValidationSetupArray = [
    {
      title: 'Great work! Now it’s time to define how to validate your idea.',
      inputComponent: (
        <div>
          {questions.map((cat) => (
            <p>{cat.category}</p>
          ))}
        </div>
      ),
    },
    {
      title: `Questions for ${questions[0].category}?`,
      subtitile: 'Let’s get started! Start from template or validate based on import from other services',
      inputComponent: (
        <>
          <ul>
            {questions[0].questions.map((qus,id) => (
              <li key={id}
              style={{listStyleType: 'decimal', listStylePosition:'inside', padding: '20px', margin: '40px', backgroundColor:'white', borderRadius:'10px'}}>
                {qus.title}
                <CustomCheckBox />
                {/* <span
                  id={qus.title}
                  onClick={toggleInclude}
                  style={{ marginLeft: '30px', border: '1px solid black'}}
                >
                  <CustomCheckBox />
                </span> */}
              </li>
              //  <input type="checkbox" id={qus.question} name={qus.question} onChange={} checked={qus.include}>
            ))}
          </ul>
          <div style={{textAlign: 'center', marginBottom : 35, marginTop : - 10}}>
            <img src="https://cdn1.iconfinder.com/data/icons/ui-glynh-01-of-5/100/UI_Glyph_1-02-512.png" 
                style={{width : 25, height : 25}}
            />
          </div>
        </>
      ),
    },
 
    {
      title: `Questions for ${questions[1].category}?`,
      subtitile: 'Let’s get started! Start from template or validate based on import from other services',
      inputComponent: (
        <>
          <ul>
            {questions[1].questions.map((qus,id) => (
              <li
              key={id}
                style={{listStyleType: 'decimal', listStylePosition:'inside', padding: '20px', margin: '40px', backgroundColor:'white', borderRadius:'10px'}}>
  >
                {qus.title}
                <CustomCheckBox />
              </li>
            ))}
          </ul>
          <div style={{textAlign: 'center', marginBottom : 35, marginTop : - 10}}>
            <img src="https://cdn1.iconfinder.com/data/icons/ui-glynh-01-of-5/100/UI_Glyph_1-02-512.png" 
                style={{width : 25, height : 25}}
            />
          </div>
        </>
      ),
    },
    {
      title: `Questions for ${questions[2].category}?`,
      subtitile: 'Let’s get started! Start from template or validate based on import from other services',
      inputComponent: (
        <>
          <ul>
            {questions[2].questions.map((qus,id) => (
              <li
              key={id}
                style={{listStyleType: 'decimal', listStylePosition:'inside', padding: '20px', margin: '40px', backgroundColor:'white', borderRadius:'10px'}}>
  >
                {qus.title}
                <CustomCheckBox />
              </li>
            ))}
          </ul>
          <div style={{textAlign: 'center', marginBottom : 35, marginTop : - 10}}>
            <img src="https://cdn1.iconfinder.com/data/icons/ui-glynh-01-of-5/100/UI_Glyph_1-02-512.png" 
                style={{width : 25, height : 25}}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <MultiStepInput
      stepsArray={ValidationSetupArray}
      progressText={`Steps to describe your ${template?.title}`}
    />
  );
};

export default ValidationSetup;
