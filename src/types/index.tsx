export interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

export interface RepositoriesResponse {
  totalCount: number;
  incompleteResults: boolean;
  items: Array<Repository>;
}

export interface ErrorRequest {
  statusError: number;
  titleError: string;
  msgError: string;
}
