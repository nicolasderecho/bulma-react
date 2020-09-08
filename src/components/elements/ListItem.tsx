import React from 'react';
import PropTypes from 'prop-types';

type ListItemProps = React.ComponentPropsWithoutRef<'li'>

const ListItem: React.FC<ListItemProps> = (props) => {
  return <li {...props} />;
};

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  className: PropTypes.string
};

export default ListItem;

export {ListItem, ListItemProps}