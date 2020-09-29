import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type FooterProps = React.ComponentPropsWithoutRef<'footer'> & {
    as?: HtmlElement;
};
declare const Footer: React.FC<FooterProps>;
export default Footer;
export { Footer, FooterProps };
