import React, { createContext, useReducer } from 'react';
import MasterObject from './MasterObject';

export const WizardState = createContext(null);

export const WizardStateProvider = ({ children }) => {
  const initialState = {
    ideaId: null,
    draft: true,
    steps: [0],
    template: null,
    title: '',
    owner: '',
    targetAudience: '',
    descriptions: {
      who: '',
      what: '',
      how: '',
      benefits: '',
      why: '',
    },
    questions: [...MasterObject],
    shareMessage: '',
  };

  const [state, dispatch] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    initialState
  );

  return (
    <WizardState.Provider value={{ state, dispatch }}>
      {children}
    </WizardState.Provider>
  );
};
