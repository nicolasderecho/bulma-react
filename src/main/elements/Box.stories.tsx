import * as React from 'react'
import Box, {BoxProps} from './Box'

export default { title: 'Elements/Box' }

export const basic = (): React.FunctionComponentElement<BoxProps> => <Box className={'my-box'} >Simple Box</Box>
