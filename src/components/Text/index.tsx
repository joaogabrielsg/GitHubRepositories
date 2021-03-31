import React from 'react';
import {Text, TextProps} from 'react-native';

const TextComponent: React.FunctionComponent<TextProps> = props => {
  return <Text {...props}>{props.children}</Text>;
};

export default TextComponent;
