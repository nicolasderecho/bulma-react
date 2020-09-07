import * as React from 'react'
import Image, {ImageProps} from './Image'

const IMAGE_SRC = 'https://bulma.io/images/placeholders/128x128.png';

export default { title: 'Image' }

export const basic = (): React.FunctionComponentElement<ImageProps> => <Image src={IMAGE_SRC} />

export const rounded = (): React.FunctionComponentElement<ImageProps> => <Image src={IMAGE_SRC} rounded />

export const sized = (): React.FunctionComponentElement<ImageProps> => <Image src={IMAGE_SRC} rounded is={'16x16'} />