import * as React from 'react'
import {Content, Breadcrumb, BreadcrumbItem} from "../../index";
import {SEPARATORS, SIZES} from "../helpers/constants";

export default { title: 'Components/Breadcrumb' }

export const basic = () => {
  return <React.Fragment>
    <Content>
      The Bulma breadcrumb is a simple navigation component that only requires a <code>breadcrumb</code> container and a <code>ul</code> list. The dividers are automatically created in the content of the <code>::before</code> pseudo-element of <code>li</code> tags.
      You can inform the current page using the is-active modifier in a li tag. It will disable the navigation of inner links.
    </Content>
    <Breadcrumb>
      <BreadcrumbItem><a href="#">Bulma</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Documentation</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
      <BreadcrumbItem active><a href="#">Breadcrumb</a></BreadcrumbItem>
    </Breadcrumb>
  </React.Fragment>
}

export const alignment = () => {
  return <React.Fragment>
    <Content>
      For alternative alignments, use the is-centered and is-right modifiers on the breadcrumb container.
    </Content>
    <Breadcrumb alignment={'right'}>
      <BreadcrumbItem><a href="#">Bulma</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Documentation</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
      <BreadcrumbItem active><a href="#">Breadcrumb</a></BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb alignment={'centered'}>
      <BreadcrumbItem><a href="#">Bulma</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Documentation</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
      <BreadcrumbItem active><a href="#">Breadcrumb</a></BreadcrumbItem>
    </Breadcrumb>
  </React.Fragment>
}

export const separators = () => {
  return <React.Fragment>
    <Content>
      You can choose between 4 additional separators: has-arrow-separator has-bullet-separator has-dot-separator and has-succeeds-separator.
    </Content>
    { SEPARATORS.map(separator => <>
      <Breadcrumb separator={separator}>
        <BreadcrumbItem><a href="#">Bulma</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Documentation</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
        <BreadcrumbItem active><a href="#">{separator} Separator</a></BreadcrumbItem>
      </Breadcrumb>
    </>) }
  </React.Fragment>
}

export const sizes = () => {
  return <React.Fragment>
    { SIZES.map(size => <>
      <Breadcrumb size={size}>
        <BreadcrumbItem><a href="#">Bulma</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Documentation</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
        <BreadcrumbItem active><a href="#">{size} Breadcrumb</a></BreadcrumbItem>
      </Breadcrumb>
    </>) }
  </React.Fragment>
}