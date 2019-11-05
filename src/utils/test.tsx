import React from 'react';
import { render, RenderResult } from '@testing-library/react';

// project
import Providers from '../providers/Providers';

const customRender = (ui: React.ReactElement, options: {}): RenderResult =>
  render(<Providers>{ui}</Providers>, options);

export * from '@testing-library/react';
export { customRender as render };
