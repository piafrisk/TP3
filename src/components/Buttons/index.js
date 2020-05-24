import styled from 'styled-components';
import { Theme } from '../Styling';

export const ContinueButn = styled.button`
  color: white;
  background-color: ${Theme.ButtonColor1};
  padding: 0.8em;
  border-radius: 30px;
  border: none;
  border: 2px solid ${Theme.ButtonColor1};
  width: 150px;
  height: 50px;
  margin: 1em;
  font-weight: bold;
  cursor: pointer;
`;

export const BackButn = styled.button`
  color: black;
  background-color: ${Theme.ButtonColor2};
  padding: 0.6em;
  border-radius: 30px;
  border: 2px solid ${Theme.ButtonColor1};
  width: 150px;
  height: 50px;
  margin: 1em;
  font-weight: bold;
  cursor: pointer;
`;

export const ChoiseButton = styled.button`
  color: white;
  background-color: ${Theme.ButtonColor1};
  padding: 0.6em;
  border-radius: 16px;
  border: none;
  border: 2px solid ${Theme.ButtonColor1};
  height: 85px;
  width: 285px;
  margin: 1em;
  font-weight: bold;
  cursor: pointer;
`;

export const GetStartedButton = styled.button`
  color: white;
  background-color: ${Theme.ButtonColor1};
  padding: 0.8em;
  border-radius: 50%;
  border: none;
  border: 2px solid ${Theme.ButtonColor1};
  width: 250px;
  height: 250px;
  margin: 1em;
  font-weight: bold;
  cursor: pointer;
`;
