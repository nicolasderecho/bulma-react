import * as React from 'react'
import Notification, {NotificationProps} from './Notification'
import { COLORS} from "../helpers/constants";

export default { title: 'Elements/Notification' }

export const basic = (): React.FunctionComponentElement<NotificationProps> => <Notification className={'custom-notification'} >
  Simple Noti
</Notification>

export const colored = () => <>
  { COLORS.map(color => <Notification key={color} color={color}>{color} notification</Notification>) }
</>;

export const lighted = () => <>
  {
    COLORS.map(color => <>
      <Notification key={color} color={color} light> {color} lighted notification</Notification>
      <Notification key={color} color={color} light={false}> {color} NOT lighted notification</Notification>
    </>)
  }
</>;