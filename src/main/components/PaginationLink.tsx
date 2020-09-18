import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {htmlElementFor} from "../helpers/util";
import {HtmlElement} from "../helpers/constants";
import {checkEnabledProperties} from "../helpers/util";

type PaginationLinkProps = React.ComponentPropsWithoutRef<'li'> & {
  as?: HtmlElement;
  current?: boolean;
}

const PaginationLink: React.FC<PaginationLinkProps> = (originalProps) => {
  const { className, as, current, ...props } = originalProps;
  const Element = htmlElementFor(as, 'a');
  const classes = classNames(className, 'pagination-link', checkEnabledProperties(originalProps, ['current']));
  return <li><Element className={classes} {...props} /></li>;
};

PaginationLink.displayName = 'PaginationLink';

PaginationLink.propTypes = {
  className: PropTypes.string,
  current: PropTypes.bool
};

export default PaginationLink;

export { PaginationLink, PaginationLinkProps }