import * as React from 'react'
import {Button, Container, Field, Tooltip} from "../../index";
import {useCallback, useState} from "react";

export default { title: 'Custom/Tooltip' }

export const basic = () => {
  const [active, setActive] = useState(false);
  const toggleTooltip = useCallback(() => setActive( previous => !previous ), []);
  return <React.Fragment>
    <Container>
      <Field>
        <Button onClick={toggleTooltip}>Toogle</Button>
      </Field>
      <Field>
        <Tooltip text={'Look me! a tooltip'} color={'success'} positionMobile={'left'} active={active} position={'bottom'}>
          <Button>Click</Button>
        </Tooltip>
      </Field>
    </Container>
  </React.Fragment>
}