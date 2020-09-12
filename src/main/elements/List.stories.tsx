import * as React from 'react'
import List, {LIST_MARKERS, LIST_TYPES, ListProps} from './List'
import Content from "./Content";

export default { title: 'Elements/List' }

export const basic = (): React.FunctionComponentElement<ListProps> => <List className={'custom-list'} >
  <List.Item>Coffee</List.Item>
  <List.Item>Tea</List.Item>
  <List.Item>Milk</List.Item>
</List>

export const listAsTypes = () => <div>
  { LIST_TYPES.map(listType => <Content key={listType}>
    <span> List as {listType}</span>
    <List as={listType} ordered>
      <List.Item>Coffee</List.Item>
      <List.Item>Tea</List.Item>
      <List.Item>Milk</List.Item>
    </List>
  </Content>) }
</div>

export const listTypes = () => <div>
  <Content>
    <span> Ordered List</span>
    <List ordered>
      <List.Item>Coffee</List.Item>
      <List.Item>Tea</List.Item>
      <List.Item>Milk</List.Item>
    </List>
  </Content>
  <Content>
    <span> Unordered List</span>
    <List unordered>
      <List.Item>Coffee</List.Item>
      <List.Item>Tea</List.Item>
      <List.Item>Milk</List.Item>
    </List>
  </Content>
  <Content>
    <span>Description List</span>
    <List description>
      <List.Item>Coffee</List.Item>
      <List.Item>Tea</List.Item>
      <List.Item>Milk</List.Item>
    </List>
  </Content>
</div>

export const markers = () => <div>
  { LIST_MARKERS.map(marker => <Content key={marker}>
    <span>Marker {marker}</span>
    <List marker={marker} ordered >
      <List.Item>Coffee</List.Item>
      <List.Item>Tea</List.Item>
      <List.Item>Milk</List.Item>
    </List>
  </Content>) }
</div>


