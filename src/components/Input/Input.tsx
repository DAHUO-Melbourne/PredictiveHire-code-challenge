import React, { useState } from 'react';
import './Input.scss';
import { IInput } from '../../interfaces/interfaces';

function Input(props: IInput) {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const { id, name, type, value, onValueChange } = props;
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsDirty(true);
    onValueChange(e);
  };
  return (
    <div className="form-control" data-test="input-box">
      <label htmlFor={id}>{name}</label>
      <input
        data-test="input"
        type={type}
        id={id}
        value={value}
        onChange={(e) => handleChange(e)}
        required
      />
      {isDirty && !value && (
        <div className="error-msg" data-test="error-message">
          please input your {name}
        </div>
      )}
    </div>
  );
}

export default Input;
