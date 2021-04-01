import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import MessageModal from './index';

describe('MessageModal component', () => {
  const onCloseMock = jest.fn();

  it('to match snapshot', () => {
    const {toJSON} = render(
      <MessageModal title="Ops!" message="error test" onClose={onCloseMock} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('to onClose be called on press button', async () => {
    const {getByTestId} = render(
      <MessageModal title="" message="" onClose={onCloseMock} />,
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
