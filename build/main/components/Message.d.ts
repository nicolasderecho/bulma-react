import React from 'react';
import { Color, Size } from "../helpers/constants";
import { MessageHeaderProps } from "./MessageHeader";
import { MessageBodyProps } from "./MessageBody";
declare type MessageProps = React.ComponentPropsWithoutRef<'article'> & {
    color?: Color;
    size?: Size;
};
declare type MessageComponent = React.FC<MessageProps> & {
    Header: React.FC<MessageHeaderProps>;
    Body: React.FC<MessageBodyProps>;
};
declare const Message: MessageComponent;
export default Message;
export { Message, MessageProps, MessageComponent };
