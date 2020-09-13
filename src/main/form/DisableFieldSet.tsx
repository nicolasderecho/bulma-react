import React from 'react';

type DisableFieldSetProps = React.ComponentPropsWithoutRef<'fieldset'>;

const DisabledFieldset: React.FC<DisableFieldSetProps> = (props) => {
  return <fieldset {...props} disabled/>;
};

DisabledFieldset.displayName = 'DisabledFieldset';

export default DisabledFieldset;

export { DisabledFieldset, DisableFieldSetProps }