import React from 'react';
import { Color, HtmlElement, Size } from "../helpers/constants";
declare type ProgressBarProps = {
    as?: HtmlElement;
    color?: Color;
    size?: Size;
    indeterminated?: boolean;
} & React.ComponentPropsWithoutRef<"progress">;
declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
export { ProgressBar, ProgressBarProps };
