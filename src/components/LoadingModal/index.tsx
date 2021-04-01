import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

import {theme, font} from '../../styles';

interface LoadingModalProps {
  isLoading: boolean;
}

const LoadingModal: React.FunctionComponent<LoadingModalProps> = props => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isLoading}
        onRequestClose={() => {}}>
        <View style={styles.fullScreenView}>
          <View style={styles.modal}>
            <ActivityIndicator size="large" color="#ffffff" />
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
  },
  modal: {
    padding: 60,
    justifyContent: 'center',
    alignContent: 'flex-start',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});

export default LoadingModal;
