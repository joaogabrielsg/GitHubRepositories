import React, {useState, useCallback} from 'react';
import {StyleSheet, View, ListRenderItem} from 'react-native';

import {theme} from '../../styles';
import {
  fetchRepositories,
  RepositoriesResponse,
  ErrorRequest,
} from '../../services/apiGitHub';

import TextInput from '../../components/TextInput';
import List from '../../components/List';
import Card from '../../components/Card';

interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

const RepositoriesList: React.FunctionComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [repositories, setRepositories] = useState<Array<Repository>>([]);

  const searchRepositories = useCallback(async text => {
    type Response = ErrorRequest & RepositoriesResponse;

    const response: Response = await fetchRepositories(text);

    if (response?.statusError) {
    } else {
      setRepositories(response.items);
    }
  }, []);

  const renderRepositoryItem: ListRenderItem<object> = useCallback(
    ({item}: {item: Repository}) => (
      <Card
        key={item?.id || ''}
        title={item.name}
        description={item.description}
        starsCount={item.stargazers_count}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <TextInput
        text={searchText}
        onChangeText={setSearchText}
        onSearch={() => searchRepositories(searchText)}
      />

      <List
        data={repositories}
        renderItem={renderRepositoryItem}
        keyExtractor={(item: Repository) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default RepositoriesList;
