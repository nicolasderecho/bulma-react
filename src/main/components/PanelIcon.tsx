import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type PanelIconProps = React.ComponentPropsWithoutRef<'span'>;

const PanelIcon: React.FC<PanelIconProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'panel-icon');
  return <span className={classes} {...props} />;
};

PanelIcon.displayName = 'PanelIcon';

PanelIcon.propTypes = {
  className: PropTypes.string
};

export default PanelIcon;

export { PanelIcon, PanelIconProps }