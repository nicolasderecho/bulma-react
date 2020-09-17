import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type MessageHeaderProps = React.ComponentPropsWithoutRef<'div'>

const MessageHeader: React.FC<MessageHeaderProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'message-header');
  return <div className={classes} {...props} />;
};

MessageHeader.displayName = 'MessageHeader';

MessageHeader.propTypes = {
  className: PropTypes.string
};

export default MessageHeader;

export { MessageHeader, MessageHeaderProps }