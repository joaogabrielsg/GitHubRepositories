import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  text: string;
  onChangeText?: () => {};
}

const CustomTextInput: React.FunctionComponent<CustomTextInputProps> = ({
  text,
  onChangeText,
}) => {
  return (
    <TextInput
      value={text}
      onChangeText={onChangeText}
      testID="nativeTextInput"
    />
  );
};

export default CustomTextInput;
