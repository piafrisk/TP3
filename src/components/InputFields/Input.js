import React from 'react';
import { TextInput } from '../Styling/';

const Input = ({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
}) => (
  <>
    <label htmlFor={name}>{label}</label>
    <TextInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </>
);

export default Input;
