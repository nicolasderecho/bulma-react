import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type MediaLeftProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const MediaLeft: React.FC<MediaLeftProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'media-left');
  return <Element className={classes} {...props} />;
};

MediaLeft.displayName = 'Media';

MediaLeft.propTypes = {
  className: PropTypes.string
};

export default MediaLeft;

export { MediaLeft, MediaLeftProps }