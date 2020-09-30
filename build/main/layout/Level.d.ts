import React from 'react';
import { HtmlElement } from "../helpers/constants";
import { LevelLeftProps } from "./LevelLeft";
import { LevelRightProps } from "./LevelRight";
import { LevelItemProps } from "./LevelItem";
declare type LevelProps = React.ComponentPropsWithoutRef<'nav'> & {
    as?: HtmlElement;
    mobile?: boolean;
};
declare type LevelComponent = React.FC<LevelProps> & {
    Left: React.FC<LevelLeftProps>;
    Right: React.FC<LevelRightProps>;
    Item: React.FC<LevelItemProps>;
};
declare const Level: LevelComponent;
export default Level;
export { Level, LevelProps, LevelComponent };
