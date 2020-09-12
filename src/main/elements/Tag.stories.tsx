import * as React from 'react'
import Tag, {TagProps} from './Tag'
import {COLORS, SIZES} from "../helpers/constants";
import Tags from "./Tags";

export default { title: 'Elements/Tag' }

export const basic = (): React.FunctionComponentElement<TagProps> => <Tag className={'custom-tag'} >
  A tag
</Tag>

export const colored = () => <Tags>
  { COLORS.map(color => <Tag key={color} color={color}>{color} tag</Tag>) }
</Tags>;

export const lighted = () => <Tags>
  { COLORS.map(color => <Tag key={color} color={color} light>{color} tag</Tag>) }
</Tags>;

export const rounded = (): React.FunctionComponentElement<TagProps> => <Tag rounded>
  Rounded tag
</Tag>

export const sized = () => <Tags>
  { SIZES.map(size => <Tag key={size} size={size}>{size} tag</Tag>) }
</Tags>;

export const SizedByGroup = () => <Tags size={'medium'}>
  <Tag>a tag</Tag>
  <Tag>another tag</Tag>
  <Tag>yet another tag</Tag>
</Tags>

export const asDelete = () => <Tags addons>
  <Tag color={'success'}>is displayed as deletable</Tag>
  <Tag isDelete />
</Tags>