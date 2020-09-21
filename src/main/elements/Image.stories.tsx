import * as React from 'react'
import Image, {ImageProps} from './Image'
import Columns from "./Columns";
import Column from "./Column";

const IMAGE_SRC = 'https://bulma.io/images/placeholders/128x128.png';

export default { title: 'Elements/Image' }

export const basic = (): React.FunctionComponentElement<ImageProps> => <React.Fragment>
  <Columns>
    <Column columnSize={'half'}>
      <Image src={IMAGE_SRC} />
    </Column>
  </Columns>
</React.Fragment>

export const rounded = (): React.FunctionComponentElement<ImageProps> => <React.Fragment>
  <Columns>
    <Column columnSize={'half'}>
      <Image src={IMAGE_SRC} rounded />
    </Column>
  </Columns>
</React.Fragment>

export const sized = (): React.FunctionComponentElement<ImageProps> => <React.Fragment>
  <Columns>
    <Column columnSize={'half'}>
      <Image src={IMAGE_SRC} rounded is={'128x128'} />
    </Column>
  </Columns>
</React.Fragment>

export const fullwidth = (): React.FunctionComponentElement<ImageProps> => <React.Fragment>
  <Columns>
    <Column columnSize={'half'}>
      <Image src={IMAGE_SRC} rounded fullwidth />
    </Column>
  </Columns>
</React.Fragment>