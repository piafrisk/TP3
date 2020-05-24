import React from 'react';
import { StyledTextarea, CenterWraper } from '../Styling';

const Textarea = ({ name, label, placeholder, value, onChange }) => (
  <CenterWraper>
    <label htmlFor={name}>{label}</label>
    <StyledTextarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </CenterWraper>
);

export default Textarea;
