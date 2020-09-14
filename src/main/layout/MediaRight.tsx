import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type MediaRightProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const MediaRight: React.FC<MediaRightProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'media-right');
  return <Element className={classes} {...props} />;
};

MediaRight.displayName = 'MediaRight';

MediaRight.propTypes = {
  className: PropTypes.string
};

export default MediaRight;

export { MediaRight, MediaRightProps }