import React from 'react';
import { HtmlElement } from "../helpers/constants";
import { MediaLeftProps } from "./MediaLeft";
import { MediaContentProps } from "./MediaContent";
import { MediaRightProps } from "./MediaRight";
declare type MediaProps = React.ComponentPropsWithoutRef<'div'> & {
    as?: HtmlElement;
};
declare type MediaComponent = React.FC<MediaProps> & {
    Left: React.FC<MediaLeftProps>;
    Content: React.FC<MediaContentProps>;
    Right: React.FC<MediaRightProps>;
};
declare const Media: MediaComponent;
export default Media;
export { Media, MediaProps, MediaComponent };
