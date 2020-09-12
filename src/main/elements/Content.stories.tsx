import * as React from 'react'
import Content, {ContentProps} from './Content'
import {SIZES, Size} from "../helpers/constants";

export default { title: 'Content' }

export const basic = (): React.FunctionComponentElement<ContentProps> => <Content className={'my-content'} >Simple Content</Content>

export const sized = () => <>
  { SIZES.map( (size: Size): React.FunctionComponentElement<ContentProps> => <div key={size}> <Content size={size} >{size} content</Content></div> ) }
</>
