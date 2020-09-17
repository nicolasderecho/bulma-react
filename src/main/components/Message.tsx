import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {colorClassFor, sizeClassFor } from "../helpers/util";
import {Color, COLORS, Size, SIZES} from "../helpers/constants";
import {MessageHeader, MessageHeaderProps} from "./MessageHeader";
import {MessageBody, MessageBodyProps} from "./MessageBody";

type MessageProps = React.ComponentPropsWithoutRef<'article'> & {
  color?: Color;
  size?: Size;
}

type MessageComponent = React.FC<MessageProps> & {
  Header: React.FC<MessageHeaderProps>;
  Body: React.FC<MessageBodyProps>;
}

const Message: MessageComponent = ({ className, color, size, ...props }) => {
  const classes = classNames(className, 'message', colorClassFor(color), sizeClassFor(size));
  return <article className={classes} {...props} />;
};

Message.displayName = 'Message';

Message.Header = MessageHeader;
Message.Body   = MessageBody;

Message.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  color: PropTypes.oneOf(COLORS)
};

export default Message;

export { Message, MessageProps, MessageComponent }