import * as React from 'react'
import {Pagination, Columns, Column} from "../../index";

export default { title: 'Components/Pagination' }


export const basic = () => {
  return <React.Fragment>
    <Columns>
      <Column>
        <Pagination>
          <Pagination.Previous>Previous</Pagination.Previous>
          <Pagination.Next>Next</Pagination.Next>
          <Pagination.List>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Ellipsis />
            <Pagination.Link>45</Pagination.Link>
            <Pagination.Link>46</Pagination.Link>
            <Pagination.Link>47</Pagination.Link>
            <Pagination.Ellipsis />
            <Pagination.Link>86</Pagination.Link>
          </Pagination.List>
        </Pagination>
      </Column>
    </Columns>
  </React.Fragment>
}

export const centered = () => {
  return <React.Fragment>
    <Columns>
      <Column>
        <Pagination alignment={'centered'}>
          <Pagination.Previous>Previous</Pagination.Previous>
          <Pagination.Next>Next</Pagination.Next>
          <Pagination.List>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Ellipsis />
            <Pagination.Link>45</Pagination.Link>
            <Pagination.Link>46</Pagination.Link>
            <Pagination.Link>47</Pagination.Link>
            <Pagination.Ellipsis />
            <Pagination.Link>86</Pagination.Link>
          </Pagination.List>
        </Pagination>
      </Column>
    </Columns>
  </React.Fragment>
}

export const rounded = () => {
  return <React.Fragment>
    <Columns>
      <Column>
        <Pagination rounded>
          <Pagination.Previous>Previous</Pagination.Previous>
          <Pagination.Next>Next</Pagination.Next>
          <Pagination.List>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Ellipsis />
            <Pagination.Link>45</Pagination.Link>
            <Pagination.Link>46</Pagination.Link>
            <Pagination.Link>47</Pagination.Link>
            <Pagination.Ellipsis />
            <Pagination.Link>86</Pagination.Link>
          </Pagination.List>
        </Pagination>
      </Column>
    </Columns>
  </React.Fragment>
}
