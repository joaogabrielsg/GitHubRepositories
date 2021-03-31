import api from './config';

export interface RepositoriesResponse {
  totalCount: number;
  incompleteResults: boolean;
  items: Array<object>;
}

export interface ErrorRequest {
  statusError: number;
  titleError: string;
  msgError: string;
}

export const fetchRepositories = async (
  searchText: string,
): Promise<RepositoriesResponse | ErrorRequest> => {
  try {
    const response = await api.get('/search/repositories', {
      params: {
        q: searchText,
      },
    });
    return {
      totalCount: response.data.total_count,
      incompleteResults: response.data.incomplete_results,
      items: response.data.items,
    };
  } catch (error) {
    return {
      statusError: error?.response?.status || error?.statusError,
      msgError: 'Erro ao buscar a lista de repositorios',
      titleError: error?.response?.title,
    };
  }
};
