import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type MediaContentProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

const MediaContent: React.FC<MediaContentProps> = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'div');
  const classes = classNames(className, 'media-content');
  return <Element className={classes} {...props} />;
};

MediaContent.displayName = 'MediaContent';

MediaContent.propTypes = {
  className: PropTypes.string
};

export default MediaContent;

export { MediaContent, MediaContentProps }