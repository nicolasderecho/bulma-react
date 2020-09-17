import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type MessageBodyProps = React.ComponentPropsWithoutRef<'div'>

const MessageBody: React.FC<MessageBodyProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'message-body');
  return <div className={classes} {...props} />;
};

MessageBody.displayName = 'MessageBody';

MessageBody.propTypes = {
  className: PropTypes.string
};

export default MessageBody;

export { MessageBody, MessageBodyProps }