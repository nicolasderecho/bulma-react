import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type SimpleCheckboxProps = React.ComponentPropsWithoutRef<'input'> & {
  wrapperClassName?: string;
}

const SimpleCheckbox: React.FC<SimpleCheckboxProps> = ({ className, children, wrapperClassName, ...props }) => {
  const classes = classNames(className, 'checkbox');
  const wrapperClasses = classNames(wrapperClassName, 'checkbox');
  return <label className={wrapperClasses}>
    <input type={'checkbox'} className={classes} {...props} />
    {children}
  </label>
};

SimpleCheckbox.displayName = 'SimpleCheckbox';

SimpleCheckbox.propTypes = {
  wrapperClassName: PropTypes.string
};

export default SimpleCheckbox;

export { SimpleCheckbox, SimpleCheckboxProps }