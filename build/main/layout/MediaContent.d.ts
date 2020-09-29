import React from 'react';
import { HtmlElement } from "../helpers/constants";
declare type MediaContentProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
};
declare const MediaContent: React.FC<MediaContentProps>;
export default MediaContent;
export { MediaContent, MediaContentProps };
