import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type PanelHeadingProps = React.ComponentPropsWithoutRef<'p'>;

const PanelHeading: React.FC<PanelHeadingProps> = ({ className, ...props }) => {
  const classes = classNames(className, 'panel-heading');
  return <p className={classes} {...props} />;
};

PanelHeading.displayName = 'PanelHeading';

PanelHeading.propTypes = {
  className: PropTypes.string
};

export default PanelHeading;

export { PanelHeading, PanelHeadingProps }