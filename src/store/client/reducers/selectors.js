export default function (globalstate) {
  const {
    entities: {
      client: { entities, fetchStatus }
    }
  } = globalstate;

  const getClient = () => entities;

  const getFetchStatus = () => fetchStatus;

  return {
    getClient,
    getFetchStatus
  };
}
