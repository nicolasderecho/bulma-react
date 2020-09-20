import * as React from 'react'
import {Message, Notification} from "../../index";
import {COLORS, SIZES} from "../helpers/constants";

export default { title: 'Components/Message' }

export const basic = () => {
  return <React.Fragment>
    <Message>
      <Message.Header>Message Title</Message.Header>
      <Message.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </Message.Body>
    </Message>
  </React.Fragment>
}

export const color = () => {
  return <React.Fragment>
    { COLORS.map(color => <React.Fragment key={color}>
      <Message color={color}>
        <Message.Header>{color} Message</Message.Header>
        <Message.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </Message.Body>
      </Message>
    </React.Fragment>) }
  </React.Fragment>
}

export const withoutTitle = () => {
  return <React.Fragment>
    <Notification>
      You can remove the <code>MessageHeader</code> if you don't need it, which will add a left border to the message body.
    </Notification>
    { COLORS.map(color => <React.Fragment key={color}>
      <Message color={color}>
        <Message.Body>
          <code>{color}</code> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </Message.Body>
      </Message>
    </React.Fragment>) }
  </React.Fragment>
}

export const size = () => {
  return <React.Fragment>
    { SIZES.map(size => <React.Fragment key={size}>
      <Message size={size}>
        <Message.Header>{size} Message</Message.Header>
        <Message.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </Message.Body>
      </Message>
    </React.Fragment>) }
  </React.Fragment>
}
