import React from 'react';
declare type NavbarLinkProps = React.ComponentPropsWithoutRef<'a'> & {
    arrowless?: boolean;
};
declare const NavbarLink: React.FC<NavbarLinkProps>;
export default NavbarLink;
export { NavbarLink, NavbarLinkProps };
