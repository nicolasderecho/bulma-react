import * as React from 'react'
import {Menu, ListItem} from "../../index";

export default { title: 'Components/Menu' }

export const basic = () => {
  return <React.Fragment>
    <Menu>
      <Menu.Label> General </Menu.Label>
      <Menu.List>
        <ListItem><a className={'is-active'}>Dashboard</a></ListItem>
        <ListItem><a>Customers</a></ListItem>
      </Menu.List>
      <Menu.Label> Transactions </Menu.Label>
      <Menu.List>
        <ListItem><a>Payments</a></ListItem>
        <ListItem><a>Transfers</a></ListItem>
        <ListItem><a>Balance</a></ListItem>
      </Menu.List>
    </Menu>
  </React.Fragment>
}