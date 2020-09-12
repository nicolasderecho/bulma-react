import * as React from 'react'
import Delete, {DeleteProps} from "./Delete";
import {SIZES, Size} from "../helpers/constants";

export default { title: 'Elements/Delete' }

export const basic = (): React.FunctionComponentElement<DeleteProps> => <Delete className={'my-content'} />

export const sized = () => <>
  { SIZES.map( (size: Size): React.FunctionComponentElement<DeleteProps> => <div key={size}> <Delete size={size} /></div> ) }
</>