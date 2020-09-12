import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {HtmlElement, Size} from "../helpers/constants";
import {htmlElementFor, sizeClassFor} from "../helpers/util";

type ContentProps = {
  size?: Size;
  as?: HtmlElement;
} & React.ComponentPropsWithoutRef<HtmlElement>

const Content: React.FC<ContentProps> = ({className, size, as, ...props}) => {
  const Element = htmlElementFor(as, 'div');
  const classes = classNames(className, 'content', sizeClassFor(size));
  return <Element className={classes} {...props} />;
}

Content.displayName = 'Content';

Content.propTypes = {
  className: PropTypes.string
};

export default Content;

export {Content, ContentProps};