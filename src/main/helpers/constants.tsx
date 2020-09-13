import { ElementType } from "../../../types/bulma-react";

export const MAIN_COLORS = ['primary', 'link', 'info', 'danger', 'success', 'warning'] as const;
export type MainColor = ElementType<typeof MAIN_COLORS>;

export const EXTRA_COLORS = ['white', 'dark', 'black'] as const;
export type ExtraColor = ElementType<typeof EXTRA_COLORS>;

export type Color = MainColor | ExtraColor;
export const COLORS: Color[] =  [...MAIN_COLORS, ...EXTRA_COLORS];

export const SIZES = ['small' , 'normal' , 'medium' , 'large'] as const;
export type Size = ElementType<typeof SIZES>;
export type SizePrefix = 'is' | 'are';

export type HeroSize = Size | 'fullheight';
export const HERO_SIZES: HeroSize[] = [...SIZES, 'fullheight'];

export const SIZE_NUMBERS = ['1','2','3','4','5','6'] as const;
export type SizeNumber = ElementType<typeof SIZE_NUMBERS>;

export const BUTTON_POSITIONS = ['centered', 'right'] as const;
export type ButtonPosition = ElementType<typeof BUTTON_POSITIONS>

export const ICON_POSITIONS = ['left', 'right'] as const;
export type IconPosition = ElementType<typeof ICON_POSITIONS>;

export const ALIGNMENTS = ['centered', 'right'] as const;
export type Alignment = ElementType<typeof ALIGNMENTS>;

export const HIERARCHIES = ['ancestor', 'parent', 'child'] as const;
export type Hierarchy = ElementType<typeof HIERARCHIES>;

export const ELEMENT_STATES = ['hovered', 'focused', 'normal', 'active'] as const;
export type ElementState = ElementType<typeof ELEMENT_STATES>;

export const SEPARATORS = ['arrow','bullet', 'dot', 'succeeds'] as const;
export type Separator = ElementType<typeof SEPARATORS>;

export const POSITIONS = ['top', 'bottom', 'left', 'right'] as const;
export type ElementPosition = ElementType<typeof POSITIONS>;

export const ORIENTATIONS = ['vertical', 'horizontal'] as const;
export type Orientation = ElementType<typeof ORIENTATIONS>;

export const BUTTON_ELEMENTS = ['a', 'input', 'link', 'button', 'div', 'span'] as const;
export type ButtonElement = ElementType<typeof BUTTON_ELEMENTS>;

export const BUTTON_TYPES = ['button', 'submit', 'reset'] as const;
export type ButtonType = ElementType<typeof BUTTON_ELEMENTS>;

export const HTML_CONVERSIONS = { link: 'a' } as const;
export type HtmlElement = Exclude<ButtonElement, 'link'> | 'hgroup' | 'main' | 'nav' | 'section' | 'header' | 'footer' | 'article' | 'aside' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'ul' | 'ol' | 'dl';

export const IMAGE_DIMENSIONS = ['16x16','24x24','32x32','48x48','64x64','96x96','128x128','square','1by1','5by4','4by3','3by2','5by3','16by9','2by1','3by1','4by5','3by4','2by3','3by5','9by16','1by2','1by3'] as const;
export type ImageDimension = ElementType<typeof IMAGE_DIMENSIONS>;