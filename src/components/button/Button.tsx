import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Button.css';

interface IButton {
  href?: string,
  loading: boolean,
  type: "button" | "submit" | "reset" | undefined,
  content: string
}

function ButtonComponent(props: IButton): JSX.Element {
  const { href, loading, type, content } = props;
  if (href) {
    return (
      <Link to={href}>
        <Button className="form-button" htmlType={type} loading={loading}>{content}</Button>
      </Link>
    )
  } else {
    return (
      <Button className="form-button" htmlType={type} loading={loading}>{content}</Button>
    )
  }
}

export default ButtonComponent