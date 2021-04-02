import React from 'react';
import {FlatList} from 'react-native';

interface ListProps<Type> {
  data: Type[];
  renderItem: ({item}: {item: Type}) => React.ReactElement;
  keyExtractor: (item: Type, index: number) => string;
  onEndReached: () => void;
  onEndReachedThreshold: number;
}

const List = <Type,>(props: React.PropsWithChildren<ListProps<Type>>) => {
  return <FlatList<Type> showsVerticalScrollIndicator={false} {...props} />;
};

export default List;
