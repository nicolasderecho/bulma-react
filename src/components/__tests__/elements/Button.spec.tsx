import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from '../../../index'

test('Renders', async () => {
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