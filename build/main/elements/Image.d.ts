import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type ImageProps = {
    wrapper?: HtmlElement;
    src: string;
    alt?: string;
    imageClass?: string;
    rounded?: boolean;
    fullwidth?: boolean;
} & React.ComponentPropsWithoutRef<"figure">;
declare const Image: React.FC<ImageProps>;
export default Image;
export { Image, ImageProps };
