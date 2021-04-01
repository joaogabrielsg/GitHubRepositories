import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Touchable,
} from 'react-native';

import Search from '../../../assets/search.png';

import {theme} from '../../styles';

interface CustomTextInputProps extends TextInputProps {
  text: string;
  onChangeText?: () => void;
  onSearch?: () => {};
}

const CustomTextInput: React.FunctionComponent<CustomTextInputProps> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={props.text}
        onChangeText={props.onChangeText}
        testID="nativeTextInput"
      />
      <TouchableWithoutFeedback onPress={props.onSearch}>
        <Image style={styles.image} source={Search} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default CustomTextInput;
