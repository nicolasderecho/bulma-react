import * as React from 'react'
import IconWrapper, {IconWrapperProps} from "./IconWrapper";
import {SIZES, Size, COLORS} from "../helpers/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default { title: 'IconWrapper' }

export const basic = (): React.FunctionComponentElement<IconWrapperProps> => <IconWrapper className={'my-content'}>
  <FontAwesomeIcon icon={faCoffee} />
</IconWrapper>

export const sized = () => <>
  { SIZES.map( (size: Size): React.FunctionComponentElement<IconWrapperProps> => <div key={size}>
    <span>{size} Icon</span>
    <IconWrapper size={size} style={{backgroundColor: '#ffdd57'}}>
      <FontAwesomeIcon icon={faCoffee} />
    </IconWrapper>
  </div> ) }
</>

export const coloredText = () => <div>
  { COLORS.map(color => <div>
    <span>{color} Icon</span>&nbsp;
    <IconWrapper hasText={color}>
      <FontAwesomeIcon icon={faCoffee} />
    </IconWrapper>
    <br/><br/>
  </div>) }
</div>