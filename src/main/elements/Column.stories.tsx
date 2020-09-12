import * as React from 'react'
import Column from './Column';
import Columns from "./Columns";
import {CSSProperties, useState} from "react";
import {ColumnSize, GapSize} from "../helpers/column_utils";
import {Color} from "../helpers/constants";
import Tag from "./Tag";
import Tags from "./Tags";

export default { title: 'Column' }

const columnContent = (text: string | number): JSX.Element => {
  const styles: CSSProperties = {backgroundColor: '#00d1b2', color: '#fff', borderRadius: '4px', padding: '1.25rem 0', textAlign: 'center', position: 'relative', fontWeight: 600, margin: 0};
  return <p style={styles} dangerouslySetInnerHTML={{__html: text.toString()}} />
}

const grayContent = (text: string | number): JSX.Element => {
  const styles: CSSProperties = {backgroundColor: '#f5f5f5', color: '#7a7a7a', borderRadius: '4px', padding: '1.25rem 0', textAlign: 'center', position: 'relative', fontWeight: 600, margin: 0};
  return <p style={styles} dangerouslySetInnerHTML={{__html: text.toString()}} />
}

export const basic = () => <React.Fragment>
  <Columns>
    <Column>{columnContent('First Column')}</Column>
    <Column>{columnContent('Second Column')}</Column>
    <Column>{columnContent('Third Column')}</Column>
    <Column>{columnContent('Fourth Column')}</Column>
  </Columns>
</React.Fragment>

export const sizes = () => <React.Fragment>
  <div className={'example'}>
    { ([1,2,3,4,5,6,7,8,10,11,12] as ColumnSize[]).map( columnSize => <Columns key={columnSize}>
      <Column key={columnSize} columnSize={columnSize}>
        {columnContent( `is-${columnSize}`)}
      </Column>
      { Array(12 - Number(columnSize)).fill(1).map( () => <Column>{grayContent(1)}</Column>  ) }
    </Columns>)
    }
  </div>
</React.Fragment>

export const sizeAliases = () => {
  const sizeAliases: ColumnSize[] = ['four-fifths', 'three-quarters', 'two-thirds', 'three-fifths', 'half', 'two-fifths', 'one-third', 'one-quarter', 'one-fifth'];
  return <React.Fragment>
    <Columns>
      <Column columnSize={'full'}>{columnContent('is-full')}</Column>
    </Columns>
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
    { pairColumnOffset.map( ([columnSize, offset]) => <Columns key={`${columnSize}-${offset}`}>
      <Column columnSize={columnSize} offset={offset} >{columnContent(`is-${columnSize} <br/> is-offset-${offset}`)}</Column>
    </Columns> ) }
  </React.Fragment>
}

export const narrow = () => {
  return <div style={{backgroundColor: '#fafafa'}}>
    <Columns>
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
    </Columns>
    <br/><br/><br/><br/>
    <h1>The Narrow prop can be specified by device</h1>
    <Columns>
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
    </Columns>
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

export const nesting = () => {
  return <Columns>
    <Column>
      {columnContent('First Column')}
      <Columns>
        <Column>{columnContent('First Nested Column')}</Column>
        <Column>{columnContent('Second Nested Column')}</Column>
      </Columns>
    </Column>
    <Column>
      {columnContent('Second Column')}
      <Columns>
        <Column columnSize={'half'}>{columnContent('50%')}</Column>
        <Column>{columnContent('auto')}</Column>
        <Column>{columnContent('auto')}</Column>
      </Columns>
    </Column>
  </Columns>
}

export const multiline = () => {
  return <React.Fragment>
    <Columns multiline from={'mobile'}>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'half'} >{columnContent('is-half')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column>{columnContent('auto')}</Column>
    </Columns>
    <h1>Centered</h1>
    <Columns multiline from={'mobile'} centered>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
    </Columns>
  </React.Fragment>
}

export const verticalyAligned = () => {
  return <React.Fragment>
    <Columns vcentered from={'mobile'}>
      <Column columnSize={8} >{columnContent('First Column')}</Column>
      <Column>{columnContent('Second column with more content. This is so you can see the vertical alignment.')}</Column>
    </Columns>
  </React.Fragment>
}

export const gap = () => {
  return <React.Fragment>
    <h1>Default</h1>
    <Columns>
      <Column>{columnContent('Default Gap')}</Column>
      <Column>{columnContent('Default Gap')}</Column>
      <Column>{columnContent('Default Gap')}</Column>
      <Column>{columnContent('Default Gap')}</Column>
    </Columns>
    <h1>Gapless</h1>
    <Columns gapless>
      <Column>{columnContent('First Column')}</Column>
      <Column>{columnContent('Second Column')}</Column>
      <Column>{columnContent('Third Column')}</Column>
      <Column>{columnContent('Fourth Column')}</Column>
    </Columns>
    <h1>Multiline</h1>
    <Columns multiline gapless from={'mobile'}>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'half'} >{columnContent('is-half')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column columnSize={'one-quarter'} >{columnContent('is-one-quarter')}</Column>
      <Column>{columnContent('auto')}</Column>
    </Columns>
  </React.Fragment>
}

export const variableGap = () => {
  const GAP_VALUE = 0.25;
  const gaps: GapSize[] = [0,1,2,3,4,5,6,7,8];
  const [selectedGap, updateSelectedGap] = useState<GapSize>(1);
  const colorFor = (gap: GapSize, selectedGap: GapSize): Color | undefined =>  gap === selectedGap ? 'primary' : undefined;

  return <React.Fragment>
    <Columns>
      <Column> <b>Gap</b>: <code>{ GAP_VALUE * Number(selectedGap) }rem</code> </Column>
      <Column columnSize={'two-thirds'}>
        <Tags>
          { gaps.map(gap => <Tag key={gap} color={colorFor(gap, selectedGap)} onMouseEnter={() => updateSelectedGap(gap)}>
            <code style={{background: 'unset'}} >is-{gap}</code>
          </Tag> ) }
        </Tags>
      </Column>
    </Columns>
    <div>
      <Columns gap={selectedGap}>
        <Column columnSize={3}>{columnContent('Side')}</Column>
        <Column columnSize={9}>{columnContent('Main')}</Column>
      </Columns>
      <Columns gap={selectedGap}>
        <Column columnSize={4}>{columnContent('Three Columns')}</Column>
        <Column columnSize={4}>{columnContent('Three Columns')}</Column>
        <Column columnSize={4}>{columnContent('Three Columns')}</Column>
      </Columns>
      <Columns gap={selectedGap}>
        { Array(12).fill(0).map( (_, index) => <Column key={index}>
          {columnContent('1')}
        </Column> ) }
      </Columns>
    </div>
  </React.Fragment>
}

export const deviceGap = () => {

  return <React.Fragment>
    <Columns from={'mobile'} gapMobile={1} gapTablet={0} gapDesktop={3} gapWidescreen={8} gapFullhd={2} >
      <Column>{columnContent('Column')}</Column>
      <Column>{columnContent('Column')}</Column>
      <Column>{columnContent('Column')}</Column>
      <Column>{columnContent('Column')}</Column>
      <Column>{columnContent('Column')}</Column>
      <Column>{columnContent('Column')}</Column>
    </Columns>
  </React.Fragment>
}