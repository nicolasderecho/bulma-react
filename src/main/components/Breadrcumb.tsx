import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {alignmentClassFor, separatorClassFor, sizeClassFor} from "../helpers/util";
import {Alignment, ALIGNMENTS, Separator, SEPARATORS, Size, SIZES} from "../helpers/constants";
import {BreadcrumbItemProps, BreadcrumbItem} from "./BreadcrumbItem";

type BreadrcumbProps = React.ComponentPropsWithoutRef<'nav'> & {
  ulClassName: string | object | undefined;
  alignment?: Alignment;
  size?: Size;
  separator?: Separator;
};

type BreadrcumbComponent = React.FC<BreadrcumbProps> & {
  Item: React.FC<BreadcrumbItemProps>
}

const Breadcrumb: BreadrcumbComponent = ({ className, children, ulClassName, alignment, size, separator, ...props }) => {
  const classes = classNames(className, 'breadcrumb', alignmentClassFor(alignment), sizeClassFor(size), separatorClassFor(separator));
  const ulClasses = classNames(ulClassName);
  return <nav aria-label={'breadcrumbs'} className={classes} {...props}>
    <ul className={ulClasses}>{children}</ul>
  </nav>;
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Item = BreadcrumbItem;

Breadcrumb.propTypes = {
  className: PropTypes.string,
  alignment: PropTypes.oneOf(ALIGNMENTS),
  size: PropTypes.oneOf(SIZES),
  separator: PropTypes.oneOf(SEPARATORS)
};

export default Breadcrumb;

export { Breadcrumb, BreadrcumbProps, BreadrcumbComponent }