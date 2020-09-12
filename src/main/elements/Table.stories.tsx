import * as React from 'react'
import Table, {TableProps} from './Table'

export default { title: 'Table' }

const exampleTableContent = () => <>
  <Table.Head>
    <Table.Row>
      <Table.CellHeader>Position</Table.CellHeader>
      <Table.CellHeader>Team</Table.CellHeader>
      <Table.CellHeader>Points</Table.CellHeader>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row selected >
      <Table.Cell>1</Table.Cell>
      <Table.Cell>River Plate</Table.Cell>
      <Table.Cell>26</Table.Cell>
    </Table.Row>
    <Table.Row selected={false}>
      <Table.Cell>2</Table.Cell>
      <Table.Cell>Boca Juniors</Table.Cell>
      <Table.Cell>22</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>3</Table.Cell>
      <Table.Cell>Racing Club</Table.Cell>
      <Table.Cell>21</Table.Cell>
    </Table.Row>
  </Table.Body>
</>

export const basic = (): React.FunctionComponentElement<TableProps> => <Table className={'custom-table'} >
  { exampleTableContent() }
</Table>

export const bordered = (): React.FunctionComponentElement<TableProps> => <Table className={'custom-table'} bordered >
  { exampleTableContent() }
</Table>

export const hoverable = (): React.FunctionComponentElement<TableProps> => <Table className={'custom-table'} hoverable >
  { exampleTableContent() }
</Table>

export const striped = (): React.FunctionComponentElement<TableProps> => <Table className={'custom-table'} striped >
  { exampleTableContent() }
</Table>

export const narrowed = (): React.FunctionComponentElement<TableProps> => <Table className={'custom-table'} narrow >
  { exampleTableContent() }
</Table>

export const fullwidth = (): React.FunctionComponentElement<TableProps> => <Table className={'custom-table'} fullwidth >
  { exampleTableContent() }
</Table>

export const combined = (): React.FunctionComponentElement<TableProps> => <Table className={'custom-table'} striped hoverable bordered fullwidth>
  { exampleTableContent() }
</Table>

export const contained = (): React.FunctionComponentElement<TableProps> => <Table.Container>
  <Table className={'custom-table'} striped hoverable bordered>
    { exampleTableContent() }
  </Table>
</Table.Container>