import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type SectionProps = React.ComponentPropsWithoutRef<'footer'> & {
    as?: HtmlElement;
    spacing?: string;
};
declare const Section: React.FC<SectionProps>;
export default Section;
export { Section, SectionProps };
