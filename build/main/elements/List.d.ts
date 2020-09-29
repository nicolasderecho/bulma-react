import React from 'react';
import { ListItemProps } from "./ListItem";
import { ElementType } from "../../../types/bulma-react";
declare const LIST_MARKERS: readonly ["lower-alpha", "lower-roman", "upper-alpha", "upper-roman"];
declare type ListMarker = ElementType<typeof LIST_MARKERS>;
declare const LIST_TYPES: readonly ["ul", "ol", "dl"];
declare type ListType = ElementType<typeof LIST_TYPES>;
declare type ListProps = {
    marker?: ListMarker;
    ordered?: boolean;
    unordered?: boolean;
    description?: boolean;
    as?: ListType;
} & React.ComponentPropsWithoutRef<'ul' | 'ol' | 'dl'>;
declare type ListComponent = {
    Item: React.FC<ListItemProps>;
} & React.FC<ListProps>;
declare const List: ListComponent;
export default List;
export { List, ListProps, ListType, LIST_TYPES, LIST_MARKERS, ListMarker, ListComponent };
