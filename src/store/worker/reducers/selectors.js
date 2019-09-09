
import map from 'lodash/map';

export default function(globalstate) {
  const {
    entities: {
      worker: { entities, fetchStatus }
    }
  } = globalstate;

  const getWorker = () => map(entities);

  const getFetchStatus = () => fetchStatus;

  return {
    getWorker,
    getFetchStatus
  };
}
