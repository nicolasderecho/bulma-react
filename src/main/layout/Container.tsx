import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties, htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
  fluid?: boolean;
  fullhd?: boolean;
  widescreen?: boolean;
  as?: HtmlElement;
}

const Container: React.FC<ContainerProps> = (originalProps) => {
  const { className, as, fluid, fullhd, widescreen, ...props } = originalProps;
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'container', checkEnabledProperties(originalProps, ['fluid', 'fullhd', 'widescreen']));
  return <Element className={classes} {...props} />;
};

Container.displayName = 'Container';

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  fullhd: PropTypes.bool,
  widescreen: PropTypes.bool
};

export default Container;

export { Container, ContainerProps }