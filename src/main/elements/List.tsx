import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isEnabled, isNotNil, isDefined } from "../helpers/util";
import ListItem, {ListItemProps} from "./ListItem";
import { ElementType } from "../../../types/bulma-react";

const LIST_MARKERS = ['lower-alpha', 'lower-roman', 'upper-alpha', 'upper-roman'] as const;
type ListMarker = ElementType<typeof LIST_MARKERS>

const LIST_TYPES = ['ul', 'ol', 'dl'] as const
type ListType = ElementType<typeof LIST_TYPES>;

type ListProps = {
  marker?: ListMarker;
  ordered?: boolean;
  unordered?: boolean;
  description?: boolean;
  as?: ListType;
} & React.ComponentPropsWithoutRef<'ul' | 'ol' | 'dl'>

const elementFor = (attributes: ListProps): ListType => {
  if(attributes.as !== undefined) {
    return attributes.as;
  }
  else if (isEnabled(attributes, 'unordered')) {
    return 'ul';
  }
  else if(isEnabled(attributes, 'ordered')) {
    return 'ol';
  }
  else if(isEnabled(attributes, 'description')) {
    return 'dl';
  }
  else {
    return 'ul';
  }
};

type ListComponent = {
  Item: React.FC<ListItemProps>;
} & React.FC<ListProps>;

const List: ListComponent = ({ ...originalProps }) => {
  const { className, marker, ordered, unordered, description, as, ...props } = originalProps;
  const classes = classNames(className, { [`is-${marker}`]: isNotNil(marker) });
  const Element = elementFor(originalProps);
  return <Element className={classes} {...props} />;
};

List.displayName = 'List';

List.Item = ListItem;

const moreThanOneExists = (attributes: ListProps, key: string, ...extraKeys: string[]): boolean => isDefined(attributes, key) && extraKeys.some((anotherKey) => isDefined(attributes, anotherKey));

const validateFieldsAreMutuallyExclusive = (attributes: ListProps, key: string, extraKeys: string[]): Error | null => {
  if (moreThanOneExists.apply(moreThanOneExists, [attributes, key, ...extraKeys])) {
    return new Error('List only supports one possible type (ordered, unordered or description). List also requires to choose between \'as\' prop or any of the list types. So if you introduced both props, you will have to remove one.');
  }
  return null
};

const mutuallyExclusiveKeysExcept = (keyToRemove: string) => {
  return ['as', 'description', 'ordered', 'unordered'].filter(key => key !== keyToRemove);
};

List.propTypes = {
  className: PropTypes.string,
  marker: PropTypes.oneOf(LIST_MARKERS),
  ordered: (props: ListProps, propName: string) => validateFieldsAreMutuallyExclusive(props, propName, mutuallyExclusiveKeysExcept(propName)),
  unordered: (props: ListProps, propName: string) => validateFieldsAreMutuallyExclusive(props, propName, mutuallyExclusiveKeysExcept(propName)),
  description: (props: ListProps, propName: string) => validateFieldsAreMutuallyExclusive(props, propName, mutuallyExclusiveKeysExcept(propName)),
  as: PropTypes.oneOf(LIST_TYPES)
};

export default List;

export { List, ListProps, ListType, LIST_TYPES, LIST_MARKERS, ListMarker, ListComponent }