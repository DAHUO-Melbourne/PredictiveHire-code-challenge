import React, { useState } from 'react';
import './InputBox.css';

interface IProps {
  id: string,
  name: string,
  type?: string,
  value: string,
  changeValue: (e: React.FormEvent<HTMLInputElement>) => void
}

function InputBox(props: IProps) {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const { id, name, type, value, changeValue } = props;
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsDirty(true);
    changeValue(e);
  }
  return (
    <div className="form-control">
      <label htmlFor={id}>{name}</label>
      <input data-test="usernameInput" type={type} id={id} value={value} onChange={(e) => handleChange(e)} required />
      {isDirty && !value && <div className="error-msg">please input your {name}</div>}
    </div>
  )
}

export default InputBox;