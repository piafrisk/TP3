import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationStep = () => (
  <>
    <h1>Fantastic!You have now sent out your first IdeaRate validation.</h1>
    <Link to="/dashboard">Take me to my dashboard</Link>
    <a href={false}>Take me to my dashboard</a>
    <p>Psst. Don’t forget to tell your friends about IdeaRate.</p>
    {/* // TODO: add social share buttons */}
  </>
);

export default ConfirmationStep;
