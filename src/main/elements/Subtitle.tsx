import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeadingElement, {HeadingElementProps} from "./HeadingElement";

type SubtitleProps = HeadingElementProps;

const Subtitle: React.FC<SubtitleProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'subtitle');
  return <HeadingElement className={classes} {...props} />;
};

Subtitle.displayName = 'Subtitle';

Subtitle.propTypes = {
  className: PropTypes.string
};

export default Subtitle;

export {Subtitle, SubtitleProps}