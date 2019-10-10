// @flow
import type { Element } from 'react';
import { render } from '@testing-library/react';

// project
import Providers from '../providers/Providers';

const customRender = (ui: Element<any>, options: ?{}) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
