/* eslint-disable jest/no-conditional-expect */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ScaleSelector from './index.js';

describe('ScaleSelector component', () => {
  test('renders without crashing', () => {
    render(<ScaleSelector />);
    const sections = screen.getAllByRole('button');
    expect(sections).toHaveLength(5);
  });

  test('all sections are rendered with correct initial colors', () => {
    render(<ScaleSelector />);
    const sections = screen.getAllByRole('button');
    sections.forEach((section) => {
      expect(section).toHaveStyle('background: #97abaf');
    });
  });


  test('fill color changes correctly based on the selected level', () => {
    render(<ScaleSelector />);
    const sections = screen.getAllByRole('button');
    
    fireEvent.click(sections[2]); 

    sections.forEach((section, index) => {
      if (index < 2) {
        expect(section).toHaveStyle('background: #97abaf'); 
      } else {
        expect(section).toHaveStyle('background: #FFFFFF');
      }
    });
  });
});
