
//import map from 'lodash/map';

export default function(globalstate) {
    const {
      entities: {
        professions: { entities, fetchStatus }
      }
    } = globalstate;
  
    const getProfessions = () => entities;
  
    const getFetchStatus = () => fetchStatus;
  
    return {
        getProfessions,
        getFetchStatus
    };
  }
  