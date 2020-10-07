import * as React from 'react'
import {Button, Field, Input, Notification} from "../src";
import {memo, useCallback, useMemo, useState} from "react";
import Label from "../src/main/form/Label";
//import {action} from "@storybook/addon-actions";

export default { title: 'Examples/Common' }

export const useMemoExample = () => {
  const [state, setState] = useState(0)
  const incrementState = () => setState(state + 1);

  const [counter, setCounter] = useState(0)
  const incrementCounter = () => setCounter(counter + 1);

  //const onClick = useCallback(() => console.log('Notification clicked'), []);

  const onClick = () => console.log('Notification clicked');

  const memoizedNotification = useMemo(() => <Notification onClick={onClick}>
    This notification displays the value of counter: {counter}
  </Notification>, [counter])

  return <React.Fragment>
    <Field>
      <Label>Changing this value shouldn't affect the notification</Label>
      <Input readOnly value={state} type={'text'} />
      <Button onClick={incrementState}>Increment</Button>
    </Field>

    <Field>
      <Label>Changing this value should re render the notification</Label>
      <Input readOnly value={counter} type={'text'} />
      <Button onClick={incrementCounter}>Increment Counter</Button>
    </Field>
    { memoizedNotification }
  </React.Fragment>
}

const MemoizedNotification = memo(Notification);

export const memoExample = () => {
  const [state, setState] = useState(0)
  const incrementState = () => setState(state + 1);

  const [counter, setCounter] = useState(0)
  const incrementCounter = () => setCounter(counter + 1);

  const onClick = useCallback(() => console.log('Notification clicked'), []);

  const message = `This notification displays the value of counter ${counter}`;

  return <React.Fragment>
    <Field>
      <Label>Changing this value shouldn't affect the notification</Label>
      <Input readOnly value={state} type={'text'} />
      <Button onClick={incrementState}>Increment</Button>
    </Field>

    <Field>
      <Label>Changing this value should re render the notification</Label>
      <Input readOnly value={counter} type={'text'} />
      <Button onClick={incrementCounter}>Increment Counter</Button>
    </Field>
    <MemoizedNotification onClick={onClick}>
      {message}
    </MemoizedNotification>
  </React.Fragment>
}