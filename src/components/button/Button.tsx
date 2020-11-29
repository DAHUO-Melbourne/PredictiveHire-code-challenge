import React from 'react';
import { Button as AntdButton } from 'antd';
import { Link } from 'react-router-dom';
import './Button.scss';
import { IButton } from '../../interfaces/interfaces';

function Button(props: IButton): JSX.Element {
  const { href, isLoading, type, content } = props;
  if (href) {
    return (
      <Link to={href} data-test="link-button">
        <AntdButton className="form-button" htmlType={type} loading={isLoading}>
          {content}
        </AntdButton>
      </Link>
    );
  } else {
    return (
      <AntdButton
        className="form-button"
        data-test="no-link-button"
        htmlType={type}
        loading={isLoading}
      >
        {content}
      </AntdButton>
    );
  }
}

export default Button;
