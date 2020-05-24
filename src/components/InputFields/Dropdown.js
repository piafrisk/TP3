import React from 'react';
import { StyledDropdown, CenterWraper } from '../Styling';

const Dropdown = ({ name, label, options, onChange, onBlur }) => (
  <CenterWraper>
    <label htmlFor={name}>{label}</label>
    <StyledDropdown name={name} onChange={onChange} onBlur={onBlur}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  </CenterWraper>
);

export default Dropdown;
