import * as React from 'react'
import {Button, Field, Tooltip} from "../../index";
import {useCallback, useState} from "react";

export default { title: 'Custom/Tooltip' }

export const basic = () => {
  const [active, setActive] = useState(false);
  const toggleTooltip = useCallback(() => setActive( previous => !previous ), []);
  return <React.Fragment>
    <Field>
      <Tooltip text={'Look me! a tooltip'} color={'success'} positionMobile={'left'} active={active} position={'bottom'}>
        <Button>Click</Button>
      </Tooltip>
      <Button onClick={toggleTooltip}>Toogle</Button>
    </Field>
  </React.Fragment>
}