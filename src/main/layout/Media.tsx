import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import MediaLeft from "./MediaLeft";
import MediaContent from "./MediaContent";
import MediaRight from "./MediaRight";
import {HtmlElement} from "../helpers/constants";
import {MediaLeftProps} from "./MediaLeft";
import {MediaContentProps} from "./MediaContent";
import {MediaRightProps} from "./MediaRight";

type MediaProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: HtmlElement;
}

type MediaComponent = React.FC<MediaProps> & {
  Left: React.FC<MediaLeftProps>;
  Content: React.FC<MediaContentProps>;
  Right: React.FC<MediaRightProps>;
}

const Media: MediaComponent = ({ className, as, ...props }) => {
  const Element    = htmlElementFor(as, 'article');
  const classes = classNames(className, 'media');
  return <Element className={classes} {...props} />;
};

Media.displayName = 'Media';

Media.propTypes = {
  className: PropTypes.string
};

Media.Left    = MediaLeft;
Media.Content = MediaContent;
Media.Right   = MediaRight;

export default Media;

export { Media, MediaProps, MediaComponent }