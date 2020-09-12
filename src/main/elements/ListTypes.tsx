import React from 'react';
import List, {ListComponent, ListProps} from "./List";
import ListItem from "./ListItem";

const OrderedList: ListComponent = (props: Omit<ListProps, 'as'>) => <List as={'ol'} {...props} />;
OrderedList.displayName = 'OrderedList';
OrderedList.Item = ListItem;

const UnorderedList: ListComponent = (props: Omit<ListProps, 'as'>) => <List as={'ul'} {...props} />;
UnorderedList.displayName = 'UnorderedList';
UnorderedList.Item = ListItem;

const DescriptionList: ListComponent = (props: Omit<ListProps, 'as'>) => <List as={'dl'} {...props} />;
DescriptionList.displayName = 'DescriptionList';
DescriptionList.Item = ListItem;

export { OrderedList, UnorderedList, DescriptionList };