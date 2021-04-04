import React, {useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {fetchRepositories} from '../../services/apiGitHub';

import {useLoading} from '../../hooks/useLoading';
import {useMessage} from '../../hooks/useMessage';

import TextInput from '../../components/TextInput';
import List from '../../components/List';
import Card from '../../components/Card';

import {Repository, RepositoriesResponse, ErrorRequest} from '../../types';

const RepositoriesList: React.FunctionComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [repositories, setRepositories] = useState<Array<Repository>>([]);
  const [page, setPage] = useState(1);
  const {isLoading, setIsLoading} = useLoading();
  const {setMessage} = useMessage();

  const searchRepositories = useCallback(
    async (text, nextPage) => {
      type Response = ErrorRequest | RepositoriesResponse;
      setPage(nextPage);

      setIsLoading(true);
      const response: Response = await fetchRepositories(text, 20, nextPage);
      setIsLoading(false);

      const responseError = response as ErrorRequest;
      const responseRepositories = response as RepositoriesResponse;

      if (responseError?.statusError) {
        setMessage(responseError.msgError);
      } else {
        const newRepositories = [
          ...repositories,
          ...responseRepositories.items,
        ];
        setRepositories(newRepositories);
      }
    },
    [setIsLoading, setMessage, repositories],
  );

  return (
    <View style={styles.container}>
      <TextInput
        text={searchText}
        onChangeText={setSearchText}
        onSearch={() => {
          setRepositories([]);
          searchRepositories(searchText, 1);
        }}
      />

      <List<Repository>
        data={repositories}
        renderItem={({item}: {item: Repository}) => (
          <Card
            key={item?.id || ''}
            title={item.name}
            description={item.description}
            starsCount={item.stargazers_count}
          />
        )}
        keyExtractor={(item: Repository) => `${item.id}`}
        onEndReached={() =>
          !isLoading ? searchRepositories(searchText, page + 1) : null
        }
        onEndReachedThreshold={0.1}
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
