import * as React from 'react'
import Title, {TitleProps} from './Title'
import {SIZE_NUMBERS} from "../helpers/constants";
import Subtitle from "./Subtitle";

export default { title: 'Elements/Title' }

export const basic = (): React.FunctionComponentElement<TitleProps> => <Title className={'custom-notification'} >
  Simple Title
</Title>

export const numbers = () => <>
  { SIZE_NUMBERS.map(number => <div key={number}>
    <Title sizeNumber={number}>{number} Title</Title>
  </div>) }
</>;

export const spaced = () => <>
  { SIZE_NUMBERS.map(number => <div key={number}>
    <Title sizeNumber={number} spaced>{number} Title</Title>
    <Subtitle sizeNumber={number}> {number} Subtitle</Subtitle>
  </div>) }
</>;