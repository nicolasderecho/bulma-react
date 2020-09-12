import * as React from 'react'
import Column from './Column';
import {CSSProperties} from "react";
import {ColumnSize} from "../helpers/column_utils";

export default { title: 'Column' }

const columnContent = (text: string | number): JSX.Element => {
  const styles: CSSProperties = {backgroundColor: '#00d1b2', color: '#fff', borderRadius: '4px', padding: '1.25rem 0', textAlign: 'center', position: 'relative', fontWeight: 600};
  return <p style={styles} dangerouslySetInnerHTML={{__html: text.toString()}} />
}

const grayContent = (text: string | number): JSX.Element => {
  const styles: CSSProperties = {backgroundColor: '#f5f5f5', color: '#7a7a7a', borderRadius: '4px', padding: '1.25rem 0', textAlign: 'center', position: 'relative', fontWeight: 600};
  return <p style={styles} dangerouslySetInnerHTML={{__html: text.toString()}} />
}

export const basic = () => <React.Fragment>
  <div className={'columns'}>
    <Column>{columnContent('First Column')}</Column>
    <Column>{columnContent('Second Column')}</Column>
    <Column>{columnContent('Third Column')}</Column>
    <Column>{columnContent('Fourth Column')}</Column>
  </div>
</React.Fragment>

export const sizes = () => <React.Fragment>
  <div className={'example'}>
    { ([1,2,3,4,5,6,7,8,10,11,12] as ColumnSize[]).map( columnSize => <div className={'columns'}>
      <Column key={columnSize} columnSize={columnSize}>
        {columnContent( `is-${columnSize}`)}
      </Column>
      { Array(12 - Number(columnSize)).fill(1).map( () => <Column>{grayContent(1)}</Column>  ) }
    </div>)
    }
  </div>
</React.Fragment>

export const sizeAliases = () => {
  const sizeAliases: ColumnSize[] = ['four-fifths', 'three-quarters', 'two-thirds', 'three-fifths', 'half', 'two-fifths', 'one-third', 'one-quarter', 'one-fifth'];
  return <React.Fragment>
    <div className={'columns'}>
      <Column columnSize={'full'}>{columnContent('is-full')}</Column>
    </div>
    { sizeAliases.map( columnSize => <div key={columnSize} className={'columns'}>
      <Column columnSize={columnSize}>{columnContent(`is-${columnSize}`)}</Column>
      <Column>{grayContent('auto')}</Column>
      <Column>{grayContent('auto')}</Column>
    </div> ) }
  </React.Fragment>
}

export const offset = () => {
  const pairColumnOffset: [ColumnSize, ColumnSize][] = [ ['half', 'one-quarter'], ['three-fifths', 'one-fifth'], [4, 8], ['11', '1'] ];
  return <React.Fragment>
    { pairColumnOffset.map( ([columnSize, offset]) => <div className={'columns'}>
      <Column columnSize={columnSize} offset={offset} >{columnContent(`is-${columnSize} <br/> is-offset-${offset}`)}</Column>
    </div> ) }
  </React.Fragment>
}

export const narrow = () => {

  return <div style={{backgroundColor: '#fafafa'}}>
    <div className={'columns'}>
      <Column narrow>
        <div className="box" style={{width: '200px'}}>
          <p className="title is-5">Narrow column</p>
          <p className="subtitle">This column is only 200px wide.</p>
        </div>
      </Column>
      <Column>
        <div className="box">
          <p className="title is-5">Flexible column</p>
          <p className="subtitle">This column will take up the remaining space available.</p>
        </div>
      </Column>
    </div>
    <br/><br/><br/><br/>
    <h1>The Narrow prop can be specified by device</h1>
    <div className={'columns'}>
      <Column narrow mobileNarrow={false} tabletNarrow={false} desktopNarrow fullhdNarrow touchNarrow widescreenNarrow >
        <div className="box" style={{width: '200px'}}>
          <p className="title is-5">Narrow by device</p>
          <p className="subtitle">This column is only 200px wide.</p>
        </div>
      </Column>
      <Column>
        <div className="box">
          <p className="title is-5">Flexible column</p>
          <p className="subtitle">This column will take up the remaining space available.</p>
        </div>
      </Column>
    </div>
  </div>

}

export const responsiveness = () => {
  return <div className={'columns'}>
    <Column mobileColumnSize={'three-quarters'} tabletColumnSize={'two-thirds'} desktopColumnSize={'half'} widescreenColumnSize={'one-third'} fullhdColumnSize={'one-third'} >
      {columnContent(`is-three-quarters-mobile <br/> is-two-thirds-tablet <br/> is-half-desktop <br/> is-one-third-widescreen <br/> is-one-quarter-fullhd`)}
    </Column>
    <Column>{columnContent(2)}</Column>
    <Column>{columnContent(3)}</Column>
    <Column>{columnContent(4)}</Column>
    <Column>{columnContent(5)}</Column>
  </div>
}