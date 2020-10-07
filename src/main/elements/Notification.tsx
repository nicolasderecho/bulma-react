import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Color, COLORS, HtmlElement} from "../helpers/constants";
import {checkEnabledProperties, colorClassFor, htmlElementFor} from "../helpers/util";

type NotificationProps = {
  as?: HtmlElement;
  color?: Color;
  light?: boolean;
} & React.ComponentPropsWithoutRef<"div">

const Notification: React.FC<NotificationProps> = ({ ...originalProps }) => {

  useEffect(() => console.log('Notification Rendered'))

  const { className, as, color, ...props } = originalProps;
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'notification', colorClassFor(color), checkEnabledProperties(originalProps, ['light']) );
  return <Element className={classes} {...props} />;
};

Notification.displayName = 'Notification';

Notification.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  light: PropTypes.bool
};

export default Notification;

export { Notification, NotificationProps }