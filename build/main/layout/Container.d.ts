import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
    fluid?: boolean;
    fullhd?: boolean;
    widescreen?: boolean;
    as?: HtmlElement;
};
declare const Container: React.FC<ContainerProps>;
export default Container;
export { Container, ContainerProps };
