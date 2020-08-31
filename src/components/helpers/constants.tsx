import {
  Alignment,
  ButtonPosition,
  Color, ElementState,
  ExtraColor,
  HeroSize, Hierarchy,
  IconPosition,
  MainColor, Orientation, Separator,
  Size,
  SizeNumber,
  ElementPosition, ButtonElement, ButtonType
} from "../../../types/bulma-react";

export const MAIN_COLORS: MainColor[] = ['primary', 'link', 'info', 'danger', 'success', 'warning'];
export const EXTRA_COLORS: ExtraColor[] = ['white', 'light', 'dark', 'black'];
export const COLORS: Color[] =  [...MAIN_COLORS, ...EXTRA_COLORS];
export const SIZES: Size[] = ['small' , 'normal' , 'medium' , 'large'];
export const HERO_SIZES: HeroSize[] = [...SIZES, 'fullheight'];
export const SIZE_NUMBERS: SizeNumber[] = ['1','2','3','4','5','6'];
export const BUTTON_POSITIONS: ButtonPosition[] = ['centered', 'right'];
export const ICON_POSITIONS: IconPosition[] = ['left', 'right'];
export const ALIGNMENTS: Alignment[] = ['centered', 'right'];
export const HIERARCHIES: Hierarchy[] = ['ancestor', 'parent', 'child'];
export const ELEMENT_STATES: ElementState[] = ['hovered', 'focused', 'normal', 'active'];
export const SEPARATORS: Separator[] = ['arrow','bullet', 'dot', 'succeeds'];
export const POSITIONS: ElementPosition[] = ['top', 'bottom', 'left', 'right'];
export const ORIENTATIONS: Orientation[] = ['vertical', 'horizontal'];
export const BUTTON_ELEMENTS: ButtonElement[] = ['a', 'input', 'link', 'button', 'div', 'span'];
export const BUTTON_TYPES: ButtonType[] = ['button', 'submit', 'reset'];
export const HTML_CONVERSIONS = { link: 'a' };
