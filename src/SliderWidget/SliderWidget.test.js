// src/SliderWithProgress.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import SliderWithProgress from './index.js';

test('renders without crashing', () => {
  render(<SliderWithProgress />);
  expect(screen.getByRole('slider')).toBeInTheDocument();
});

test('initial value of slider and progress is 0', () => {
  render(<SliderWithProgress />);
  const slider = screen.getByRole('slider');
  const progressValue = screen.getByText('0');

  expect(slider).toHaveValue('0');
  expect(progressValue).toBeInTheDocument();
});

test('changing the slider updates the progress value and circular progress bar', () => {
  render(<SliderWithProgress />);
  const slider = screen.getByRole('slider');

  fireEvent.change(slider, { target: { value: '5' } });

  expect(slider).toHaveValue('5');
  expect(screen.getByText('5')).toBeInTheDocument();

  const circle = screen.getByRole('presentation', { hidden: true });
  expect(circle).toHaveStyle('background: conic-gradient(#4caf50 180deg, #d6d6d6 180deg)');
});
