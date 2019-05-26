import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../src/components/app';

afterEach(cleanup)

it('renders something', () => {
    const { container, getByText } = render(<App/>)
    expect(getByText('TOTAL TIME SPENT ON THE PROJECT')).toBeInTheDocument();
});
