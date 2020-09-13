import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type SimpleRadioProps = React.ComponentPropsWithoutRef<'input'> & {
  wrapperClassName?: string;
}

const SimpleRadio: React.FC<SimpleRadioProps> = ({ className, children, wrapperClassName, ...props }) => {
  const classes = classNames(className, 'radio');
  const wrapperClasses = classNames(wrapperClassName, 'radio');
  return <label className={wrapperClasses}>
    <input type={'radio'} className={classes} {...props} />
    {children}
  </label>
};

SimpleRadio.displayName = 'SimpleRadio';

SimpleRadio.propTypes = {
  className: PropTypes.string
};

export default SimpleRadio;

export { SimpleRadio, SimpleRadioProps }