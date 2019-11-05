import React from 'react';

// project
import Search from '../Search';
import { render, fireEvent } from '../../utils/test';

describe('Search', () => {
  it('Should emit onChange events', () => {
    const onChange = jest.fn();

    const { getByTestId } = render(<Search onChange={onChange} />, {});

    const event = { target: { value: 'Hello world' } };
    const input = getByTestId('StyledInput') as HTMLInputElement;

    expect(input.value).toEqual('');
    fireEvent.change(input, event);
    expect(onChange).toHaveBeenCalled();
  });
});
