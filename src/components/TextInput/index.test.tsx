import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import TextInput from './index';

describe('TextInput component', () => {
  const onChangeTextMock = jest.fn();

  it('to match snapshot', () => {
    const {toJSON} = render(
      <TextInput text="" onChangeText={onChangeTextMock} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('to text prop is pass to TextInput value prop', async () => {
    const {getByTestId} = render(
      <TextInput text="text test" onChangeText={onChangeTextMock} />,
    );

    const nativeTextInput = getByTestId('nativeTextInput');
    expect(nativeTextInput.props.value).toBe('text test');
  });

  it('to onChangeText be called on change text', async () => {
    const {getByTestId} = render(
      <TextInput text="text test" onChangeText={onChangeTextMock} />,
    );

    const nativeTextInput = getByTestId('nativeTextInput');
    fireEvent.changeText(nativeTextInput, '');

    expect(onChangeTextMock).toHaveBeenCalled();
  });
});
