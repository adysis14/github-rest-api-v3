import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import Header from '../Header'

it('renders', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
})

it('renders text', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('header-text')).toHaveTextContent('GitHub API Playground')
})