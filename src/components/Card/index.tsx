import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Text from '../Text';

import Star from '../../../assets/star.png';

import {theme, font} from '../../styles';

interface CardProps {
  title: string;
  description: string;
  starsCount: number;
}

const Card: React.FunctionComponent<CardProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View style={styles.startContainer}>
        <Image style={styles.image} source={Star} />
        <Text style={styles.startCount}>{`${props.starsCount}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: theme.secondary,
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 10,
  },
  textContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  title: {
    fontSize: font.subTitle,
    fontWeight: 'bold',
  },
  description: {
    fontSize: font.normal,
  },
  startContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  startCount: {
    fontSize: font.title,
    fontWeight: 'bold',
  },
  image: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export default Card;
