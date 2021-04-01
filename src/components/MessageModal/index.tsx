import React from 'react';
import {StyleSheet, View, Modal, TouchableWithoutFeedback} from 'react-native';

import Text from '../Text';

import {theme, font} from '../../styles';

interface MessageModalProps {
  title: string;
  message: string;
  onClose: () => void;
}

const MessageModal: React.FunctionComponent<MessageModalProps> = props => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={props.message !== ''}
        onRequestClose={props.onClose}>
        <View style={styles.fullScreenView}>
          <View style={styles.modal}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>{props.message}</Text>
            </View>
            <TouchableWithoutFeedback testID="button" onPress={props.onClose}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>ok</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.modalBackground,
  },
  modal: {
    paddingVertical: 20,
    width: 250,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: font.title,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleContainer: {
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  message: {
    fontSize: font.subTitle,
    textAlign: 'center',
  },
  messageContainer: {
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    fontSize: font.subTitle,
    textAlign: 'center',
    color: theme.special,
  },
  buttonContainer: {
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default MessageModal;
