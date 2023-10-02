import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('app', () => {
  test('test', () => {
    let { getByText } = render(<App />);
    expect(getByText('clarke')).toMatchSnapshot();
  });
});
