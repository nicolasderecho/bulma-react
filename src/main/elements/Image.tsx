import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties, htmlElementFor} from "../helpers/util";
import {IMAGE_DIMENSIONS, HtmlElement} from "../helpers/constants";

type ImageProps = {
  wrapper?: HtmlElement;
  src: string;
  alt?: string;
  imageClass?: string;
  rounded?: boolean;
  fullwidth?: boolean;
} & React.ComponentPropsWithoutRef<"figure">

const Image: React.FC<ImageProps> = ({ ...originalProps }) => {
  const { className, is, wrapper, children, src, alt, imageClass, rounded, fullwidth, ...props } = originalProps
  const imgAlt = alt || '';
  const Wrapper = htmlElementFor(wrapper, 'figure');
  const classes = classNames(className, 'image', {[`is-${is}`]: !!is },checkEnabledProperties(originalProps, ['fullwidth']));
  const childClasses = classNames(imageClass, checkEnabledProperties(originalProps, ['rounded']));
  return <Wrapper className={classes} {...props} >
    { !!src
      ? <img src={src} alt={imgAlt} className={childClasses} />
      : children
    }
  </Wrapper>;
};

Image.displayName = 'Image';

Image.propTypes = {
  className: PropTypes.string,
  is: PropTypes.oneOf(IMAGE_DIMENSIONS),
  fullwidth: PropTypes.bool,
  rounded: PropTypes.bool,
  children: (props: ImageProps, propName: string) => {
    if ( !!props['src'] && !!props[propName]) {
      return new Error('Image Can receive the src props or a children to render the img element but It shouldn\'t receive both at the same time. Children will be ignored.');
    }
    return null;
  },
};


export default Image;
export { Image, ImageProps }