import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeadingElement, {HeadingElementProps} from "./HeadingElement";

type TitleProps = HeadingElementProps;

const Title: React.FC<TitleProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'title');
  return <HeadingElement className={classes} {...props} />;
};

Title.displayName = 'Title';

Title.propTypes = {
  className: PropTypes.string
};

export default Title;

export { Title, TitleProps }