import * as React from 'react'
import IconWrapper, {IconWrapperProps} from "./IconWrapper";
import {SIZES, Size} from "../helpers/constants";

export default { title: 'IconWrapper' }

export const basic = (): React.FunctionComponentElement<IconWrapperProps> => <IconWrapper className={'my-content'} />

export const sized = () => <>
  { SIZES.map( (size: Size): React.FunctionComponentElement<IconWrapperProps> => <div key={size}> <IconWrapper size={size} /></div> ) }
</>