import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";

type MenuListProps = React.ComponentPropsWithoutRef<'ul'> & {
  as?: HtmlElement;
}

const MenuList: React.FC<MenuListProps> = ({ className, as, ...props }) => {
  const Element = htmlElementFor(as, 'ul');
  const classes = classNames(className, 'menu-list');
  return <Element className={classes} {...props} />;
};

MenuList.displayName = 'MenuList';

MenuList.propTypes = {
  className: PropTypes.string
};

export default MenuList;

export { MenuList, MenuListProps }