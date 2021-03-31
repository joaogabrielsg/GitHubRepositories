import React from 'react';
import {FlatListProps, FlatList} from 'react-native';

const List: React.FunctionComponent<FlatListProps<object>> = props => {
  return <FlatList showsVerticalScrollIndicator={false} {...props} />;
};

export default List;
