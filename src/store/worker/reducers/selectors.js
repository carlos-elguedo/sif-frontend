
import map from 'lodash/map';

export default function(globalstate) {
  const {
    entities: {
      worker: { entities, fetchStatus }
    }
  } = globalstate;

  const getExclusions = () => map(entities);

  const getFetchStatus = () => fetchStatus;

  return {
    getExclusions,
    getFetchStatus
  };
}
