export type MainColor = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';
export type ExtraColor = 'white' | 'light' | 'dark' | 'black';
export type Color = MainColor | ExtraColor;
export type Size = 'small' | 'normal' | 'medium' | 'large';
export type HeroSize = Size | 'fullheight';
export type SizeNumber = '1' | '2' | '3' | '4' | '5' | '6';
export type ButtonPosition = 'centered' | 'right';
export type IconPosition = 'left' | 'right';
export type Alignment = 'centered' | 'right';
export type Hierarchy = 'ancestor' | 'parent' | 'child';
export type ElementState = 'hovered' | 'focused' | 'active' | 'normal';
export type Separator = 'arrow' | 'bullet' | 'dot' | 'succeeds';
export type ElementPosition = 'top' | 'bottom' | 'left' | 'right';
export type Orientation = 'vertical' | 'horizontal';
export type ButtonElement = 'a' | 'input' | 'link' | 'button' | 'div' | 'span';
export type ButtonType = 'button' | 'submit' | 'reset';
export type HtmlElement = Exclude<ButtonElement, 'link'>;

export type ClassNameProp = {
  [t: string]: boolean
}

export interface ICheckPropertyOptions {
  prefix: string | undefined | null;
}