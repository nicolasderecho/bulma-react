import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { alignmentClassFor, checkEnabledProperties, sizeClassFor } from "../helpers/util";
import {SIZES, Size, Alignment, ALIGNMENTS} from "../helpers/constants";
import { PaginationPrevious, PaginationPreviousProps} from "./PaginationPrevious";
import { PaginationNext, PaginationNextProps} from "./PaginationNext";
import { PaginationList, PaginationListProps } from "./PaginationList";
import { PaginationLink, PaginationLinkProps} from "./PaginationLink";
import {PaginationEllipsis, PaginationEllipsisProps} from "./PaginationEllipsis";

type PaginationProps = React.ComponentPropsWithoutRef<'nav'> & {
  size?: Size;
  alignment?: Alignment;
  rounded?: boolean;
};

type PaginationComponent = React.FC<PaginationProps> & {
  Previous: React.FC<PaginationPreviousProps>;
  Next: React.FC<PaginationNextProps>;
  List: React.FC<PaginationListProps>;
  Link: React.FC<PaginationLinkProps>;
  Ellipsis: React.FC<PaginationEllipsisProps>;
};

const Pagination: PaginationComponent = (originalProps) => {
  const { className, size, alignment, rounded, ...props } = originalProps;
  const classes = classNames(className, 'pagination', sizeClassFor(size), alignmentClassFor(alignment), checkEnabledProperties(originalProps, ['rounded']));
  return <nav className={classes} {...props} role={'navigation'} aria-label={'pagination'}/>;
};

Pagination.displayName = 'Pagination';

Pagination.Previous = PaginationPrevious;
Pagination.Next     = PaginationNext;
Pagination.List     = PaginationList;
Pagination.Link     = PaginationLink;
Pagination.Ellipsis = PaginationEllipsis;

Pagination.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  alignment: PropTypes.oneOf(ALIGNMENTS),
  rounded: PropTypes.bool
};

export default Pagination;

export { Pagination, PaginationComponent, PaginationProps }