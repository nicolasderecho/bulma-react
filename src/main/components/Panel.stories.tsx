import * as React from 'react'
import {Panel, Control, Input, IconWrapper, Columns, Column} from "../../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBook } from '@fortawesome/free-solid-svg-icons'
import {COLORS} from "../helpers/constants";

export default { title: 'Components/Panel' }

export const basic = () => {
  return <React.Fragment>
    <Columns>
      <Column offset={'one-quarter'} columnSize={'half'}>
        <Panel>
          <Panel.Heading>Repositories</Panel.Heading>
          <Panel.Block>
            <Control hasIconsLeft>
              <Input placeholder={'Search'} />
              <IconWrapper position={'left'}>
                <FontAwesomeIcon icon={faSearch} />
              </IconWrapper>
            </Control>
          </Panel.Block>
          <Panel.Tabs>
            <Panel.Tabs.Item active>All</Panel.Tabs.Item>
            <Panel.Tabs.Item>Public</Panel.Tabs.Item>
            <Panel.Tabs.Item>Private</Panel.Tabs.Item>
          </Panel.Tabs>
          <Panel.Block active>
            <Panel.Icon><FontAwesomeIcon icon={faBook} /></Panel.Icon>
            <span>Bulma</span>
          </Panel.Block>
          <Panel.Block>
            <Panel.Icon><FontAwesomeIcon icon={faBook} /></Panel.Icon>
            <span>marksheet</span>
          </Panel.Block>
          <Panel.Block>
            <Panel.Icon><FontAwesomeIcon icon={faBook} /></Panel.Icon>
            <span>minireset.css</span>
          </Panel.Block>
        </Panel>
      </Column>
    </Columns>
  </React.Fragment>
}

export const color = () => {
  return <React.Fragment>
    { COLORS.map(color => <Columns key={color}>
      <Column offset={'one-quarter'} columnSize={'half'}>
        <Panel color={color}>
          <Panel.Heading>{color}</Panel.Heading>
          <Panel.Block>
            <Control hasIconsLeft>
              <Input placeholder={'Search'} />
              <IconWrapper position={'left'}>
                <FontAwesomeIcon icon={faSearch} />
              </IconWrapper>
            </Control>
          </Panel.Block>
          <Panel.Tabs>
            <Panel.Tabs.Item active>All</Panel.Tabs.Item>
            <Panel.Tabs.Item>Public</Panel.Tabs.Item>
            <Panel.Tabs.Item>Private</Panel.Tabs.Item>
          </Panel.Tabs>
          <Panel.Block active>
            <Panel.Icon><FontAwesomeIcon icon={faBook} /></Panel.Icon>
            <span>Bulma</span>
          </Panel.Block>
          <Panel.Block>
            <Panel.Icon><FontAwesomeIcon icon={faBook} /></Panel.Icon>
            <span>marksheet</span>
          </Panel.Block>
          <Panel.Block>
            <Panel.Icon><FontAwesomeIcon icon={faBook} /></Panel.Icon>
            <span>minireset.css</span>
          </Panel.Block>
        </Panel>
      </Column>
    </Columns> ) }
  </React.Fragment>
}