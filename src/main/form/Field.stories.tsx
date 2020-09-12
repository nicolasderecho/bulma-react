import * as React from 'react'
import Field, {FieldProps} from './Field'

export default { title: 'Form/Field' }

export const basic = (): React.FunctionComponentElement<FieldProps> => <Field>A field</Field>
