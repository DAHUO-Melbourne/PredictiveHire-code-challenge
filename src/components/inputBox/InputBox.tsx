import React, { useState } from 'react';
import './InputBox.scss';
import { IInputBox } from '../../interfaces/interfaces';

function InputBox(props: IInputBox) {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const { id, name, type, value, changeValue } = props;
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsDirty(true);
    changeValue(e);
  }
  return (
    <div className="form-control" data-test="input-box">
      <label htmlFor={id}>{name}</label>
      <input data-test="input" type={type} id={id} value={value} onChange={(e) => handleChange(e)} required />
      {isDirty && !value && <div className="error-msg">please input your {name}</div>}
    </div>
  )
}

export default InputBox;