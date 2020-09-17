import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type MenuLabelProps = React.ComponentPropsWithoutRef<'p'>;

const MenuLabel: React.FC<MenuLabelProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'menu-label');
  return <p className={classes} {...props} />;
};

MenuLabel.displayName = 'MenuLabel';

MenuLabel.propTypes = {
  className: PropTypes.string
};

export default MenuLabel;

export { MenuLabel, MenuLabelProps }