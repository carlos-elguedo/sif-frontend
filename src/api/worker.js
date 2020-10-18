import { sifRequestInstance, sifGraphqlInstance } from './';
import { SEARCH_WORKER } from '../utils/graphql/worker';
import { DEFAULT_QUERY_PARAMS } from '../constants';

const config = require('../config');

export const saveProfileChanges = data => {
  return sifRequestInstance.put(`/${config.SERVER_API_WORKER_URL}update`, data);
};

export const getWorker = () => {
  return sifRequestInstance.get(`/${config.SERVER_API_WORKER_URL}`);
};

export const searchWorkers = ({
  offset = DEFAULT_QUERY_PARAMS.offset,
  limit = DEFAULT_QUERY_PARAMS.limit,
  order = DEFAULT_QUERY_PARAMS.order,
  sort = 'last',
  active = DEFAULT_QUERY_PARAMS.active,
  searchBy = DEFAULT_QUERY_PARAMS.searchBy,
  q
}) => {
  return sifGraphqlInstance.query({
    query: SEARCH_WORKER,
    variables: {
      data: {
        q,
        order,
        limit,
        offset,
        searchBy
      }
    }
  });
};
