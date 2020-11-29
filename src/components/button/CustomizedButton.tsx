import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './CustomizedButton.scss';
import { IButton } from '../../interfaces/interfaces';

function ButtonComponent(props: IButton): JSX.Element {
  const { href, isLoading, type, content } = props;
  if (href) {
    return (
      <Link to={href} data-test="link-button">
        <Button className="form-button" htmlType={type} loading={isLoading}>
          {content}
        </Button>
      </Link>
    );
  } else {
    return (
      <Button
        className="form-button"
        data-test="no-link-button"
        htmlType={type}
        loading={isLoading}
      >
        {content}
      </Button>
    );
  }
}

export default ButtonComponent;
