import React from 'react';
import { Color, HtmlElement } from "../helpers/constants";
declare type NotificationProps = {
    as?: HtmlElement;
    color?: Color;
    light?: boolean;
} & React.ComponentPropsWithoutRef<"div">;
declare const Notification: React.FC<NotificationProps>;
export default Notification;
export { Notification, NotificationProps };
