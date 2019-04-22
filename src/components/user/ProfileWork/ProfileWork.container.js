import { connect } from 'react-redux';

import ProfileWork from './ProfileWork';
// import {
//   selectors,
//   actions
// } from '../../../../../../../../store/exclusions';

export const mapStateToProps = (state) => {

  // let exclusionsSelectors = selectors(state);

  return {
    user_name: 'Carlos Elguedo',
    user_work: 'Electricista',
    user_work_category: 'Tecnicos',
    //name: exclusionsSelectors.getExclusions(),
    status: true//exclusionsSelectors.getFetchStatus()
  };
};
export default connect(
  mapStateToProps,
  {
    // fetchExclusionEmployees: actions.exclusionsFetch
  }
)(ProfileWork);
