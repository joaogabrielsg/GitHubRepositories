# API GitHub Documentation

## Oficial Documantation

Docs: https://docs.github.com/en/rest/reference/search#search-repositories

## Fetch Repositories

Find repositories via various criteria.

**Parameters**
| Name            | Type         | Default         |Description                                                     |
| :---            |    :----:    |    :----:       |         :---:                                                  |
| searchText      | string       |                 |The query contains one or more search keywords and qualifiers.  |
| perPage         | integer      |      20         |Results per page (max 100).                                     |
| page            | integer      |      0          |Page number of the results to fetch.                            |