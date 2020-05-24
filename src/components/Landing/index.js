import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import * as ROUTES from '../../routes';
import {
  GridContainer,
  Header,
  Main,
  CenterWraper,
  OuterCircle,
  Footer,
  ButtonWrapper,
} from '../Styling';
import { GetStartedButton } from '../Buttons';

const Landing = () => {
  const user = useContext(UserContext);

  return (
    <GridContainer>
      {user ? <Link to={ROUTES.DASHBOARD}>DASHBOARD</Link> : null}
      <Header>
        <blockquote>
          “What if we found ourselves building something that nobody wanted? In
          that case what did it matter if we did it on time and on budget?”
          <br></br> – Eric Ries
        </blockquote>
      </Header>
      <Main>
        <CenterWraper>
          <OuterCircle>
            <GetStartedButton>
              <Link
                style={{
                  color: 'white',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
                to={ROUTES.WIZARD}
              >
                Click to get started
              </Link>
            </GetStartedButton>
          </OuterCircle>
        </CenterWraper>
      </Main>
      <ButtonWrapper>
        <h1>Validate your idea with IdeaRate before building it!</h1>
      </ButtonWrapper>
      <Footer>
        {!user && (
          <p>
            Already have an account?{' '}
            <Link to={ROUTES.SIGN_IN}>Sign in here</Link>
          </p>
        )}
      </Footer>
    </GridContainer>
  );
};

export default Landing;
