
//import map from 'lodash/map';

export default function(globalstate) {
    const {
      entities: {
        categories: { entities, fetchStatus }
      }
    } = globalstate;
  
    const getCategories = () => entities;
  
    const getFetchStatus = () => fetchStatus;
  
    return {
        getCategories,
        getFetchStatus
    };
  }
  