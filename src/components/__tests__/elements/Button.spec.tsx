import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from '../../../index'

it('renders a button', async () => {
  const { getByRole } = render(<Button>My Button</Button>)
  const button = getByRole('button')
  expect(button).toHaveTextContent('My Button')
  expect(button).toHaveClass('button')
  expect(button).not.toHaveClass('is-light')
})

it('renders a light button', async () => {
  const { getByRole } = render(<Button light>My Button</Button>)
  expect(getByRole('button')).toHaveClass('is-light')
})

it('renders an outlined button', async () => {
  const { getByRole } = render(<Button outlined>My Button</Button>)
  expect(getByRole('button')).toHaveClass('is-outlined')
})

describe('when it\'s not an input button', () => {

  it('displays the button\'s children', async () => {
    const content = <span>spanContent</span>;
    const { findByText: findButtonByText } = render(<Button as={'button'}>{content}</Button>)
    const buttonChildren = await findButtonByText(/spanContent/)
    expect(buttonChildren).not.toBeEmptyDOMElement();
  });

})