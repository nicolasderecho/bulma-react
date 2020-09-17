import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {checkEnabledProperties, htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type DropdownItemProps = React.ComponentPropsWithoutRef<'a' | 'div'> & {
  active?: HtmlElement;
  as?: HtmlElement;
}

const DropdownItem: React.FC<DropdownItemProps> = (originalProps) => {
  const { className, as, active, ...props } = originalProps;
  const Element = htmlElementFor(as, 'a');
  const classes = classNames(className, 'dropdown-item', checkEnabledProperties(originalProps, ['active']));
  return <Element className={classes} {...props} />;
};

DropdownItem.displayName = 'DropdownItem';

DropdownItem.propTypes = {
  className: PropTypes.string
};

export default DropdownItem;

export { DropdownItem, DropdownItemProps }