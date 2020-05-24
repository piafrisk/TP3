import React, { useState, useContext } from 'react';
import { CenterWraper, Theme } from '../Styling';
import styled from 'styled-components';
import { WizardState } from '../IdeaWizard/WizardState';

const ValidationStatusDiv = styled.div`
  background-color: white;
  width: 80%;
  max-width: 600px;
  height: 100%;
  border-radius: 8px;
`;
const ValidationStatusLower = styled.div`
  background-color: #262b2e;
  border-radius: 0 0 8px 8px;
  padding: 0.4em;
  text-align: center;

  h3 {
    color: white;
  }

  ul {
    list-decoration: none;
    padding-inline-start: 0px;
  }

  li {
    background-color: white;
    color: black;
    width: 90%;
    padding: 0.5em;
    margin: 0 auto 0.5em auto;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const RemindButton = styled.button`
  color: white;
  background-color: black;
  padding: 0 1em 0 1em;
  border: none;
  border-radius: 10em;
  font-weight: bold;
  cursor: pointer;
`;
const RemindAllButton = styled.button`
  color: white;
  background-color: ${Theme.ButtonColor2};
  padding: 0.6em;
  border-radius: 30px;
  border: 3px solid white;
  width: 150px;
  height: 50px;
  margin-bottom: 4em;
  font-weight: bold;
  cursor: pointer;
`;

const WhiteBarDiv = styled.div`
  background-color: white;
  width: 80%;
  max-width: 600px;
  padding: 0.5em;
  margin: 0 auto 0.5em auto;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FinalViewButton = styled.button`
  color: white;
  background-color: #25c12b;
  padding: 0 3em 0 3em;
  border: none;
  border-radius: 10em;
  font-weight: bold;
  cursor: pointer;
`;

const Dashboard = () => {
  const { state, dispatch } = useContext(WizardState);
  const [users, setUsers] = useState([
    {
      email: 'abc@test.se',
      reminderSent: false,
    },
    {
      email: 'Sven@test.se',
      reminderSent: false,
    },
    {
      email: 'John@test.se',
      reminderSent: false,
    },
  ]);

  const [respondants, setRespondants] = useState({
    responded: 4,
    maxResponse: 7,
  });

  const [expireDate, setExpireDate] = useState(
    new Date(Date.now()).toLocaleDateString()
  );

  const remindUser = (e) => {
    let mutableUsers = [...users];
    mutableUsers.forEach((user) => {
      if (user.email === e.target.id) {
        user.reminderSent = true;
      }
    });
    setUsers(mutableUsers);
  };

  const remindAll = () => {
    let mutableUsers = [...users];
    mutableUsers.forEach((user) => {
      user.reminderSent = true;
    });
    setUsers(mutableUsers);
  };

  const dateInputChange = (e) => {
    setExpireDate(e.target.value);
  };

  console.log(state);
  return (
    <CenterWraper>
      <h1>Dashboard</h1>
      <h1>{state.title ? state.title : 'Untitled idea'}</h1>
      <h3>Validation status</h3>
      <ValidationStatusDiv>
        <h1>
          {respondants.responded}/{respondants.maxResponse}
        </h1>
        <p>respondants</p>
        <p>
          You are recommended is to reach at least XX% respondents to get a
          final validation matrix.
        </p>
        <ValidationStatusLower>
          <h3>Your Validation Group</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'white',
              width: '80%',
              margin: 'auto',
            }}
          >
            <h6 style={{ margin: '0' }}>Name</h6>
            <h6 style={{ margin: '0' }}>Replied</h6>
          </div>
          <ul>
            {users.map((user) => (
              <li key={user.email}>
                <p>{user.email}</p>
                <RemindButton id={user.email} onClick={remindUser}>
                  {user.reminderSent ? 'Reminder sent' : 'Remind'}
                </RemindButton>
              </li>
            ))}
          </ul>
          <RemindAllButton onClick={remindAll}>Remind all</RemindAllButton>
        </ValidationStatusLower>
      </ValidationStatusDiv>
      <h3>Validation deadline</h3>
      <p>By changing the the date you can choose to extend your deadline.</p>
      <WhiteBarDiv>
        <input
          onChange={dateInputChange}
          type="date"
          id="start"
          name="trip-start"
          value={expireDate}
        />
        <RemindButton>Extend</RemindButton>
      </WhiteBarDiv>
      <h3>Validation link</h3>
      <p>Use the link below to share your validation to more people.</p>
      <WhiteBarDiv>
        <p>idearate.com/82HJzaJL91</p>
      </WhiteBarDiv>
      <h3>Validation matrix</h3>
      <p>
        Your validation matrix will appear when you have enough respondents.
      </p>
      <h3 style={{ color: 'red' }}>TODO: Validation matrix</h3>
      <h3>Share your matrix</h3>
      <p>Feel free to share your matrix with anyone.</p>

      <FinalViewButton>
        <p>Show final dashboard view</p>
      </FinalViewButton>
    </CenterWraper>
  );
};

export default Dashboard;
