import styled from 'styled-components';

export const Theme = {
  MainBackgroundColor: '#F3F3F3',
  ButtonColor1: '#262b2e',
  ButtonColor2: 'transparent',
};

export const GridContainer = styled.div`
  display: grid;
  height: 100vh;
  align-items: center;
  grid-template-columns: 10fr 80fr 10fr;
  grid-template-rows: 20fr 50fr 10fr 20fr;
  grid-template-areas:
    '. header .'
    '. main .'
    '. button .'
    '. footer .';

  @media only screen and (max-width: 768px) {
    grid-template-columns: 5fr 90fr 5fr;
  }
`;

export const ButtonWrapper = styled.div`
  grid-area: button;
  display: flex;
  justify-self: center;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: space-evenly;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  grid-area: footer;
  justify-self: center;
  align-self: start;
`;

export const Header = styled.div`
  grid-area: header;
  justify-self: center;
  align-self: end;

  @media only screen and (max-width: 768px) {
    align-self: center;
  }
`;

export const Main = styled.div`
  grid-area: main;
  justify-self: center;
  align-self: center;
  max-width: 35rem;
  height: 100%;
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  height: 20rem;
  resize: none;
  margin 1rem;
  :focus {
    outline: none;
    -webkit-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 768px) {
    height: 15rem;
  }
`;

export const TextInput = styled.input`
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  margin 1rem;
  :focus {
    outline: none;
    -webkit-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
  }
  
`;

export const StyledDropdown = styled.select`
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  margin 1rem;
  :focus {
    outline: none;
    -webkit-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.3);
  }
`;

export const CenterWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const OuterCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  border: 30px solid ${Theme.ButtonColor1};
  border-radius: 50%;
`;
