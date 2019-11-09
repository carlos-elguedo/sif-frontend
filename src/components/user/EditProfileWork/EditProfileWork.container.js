import { connect } from 'react-redux';

import EditProfileWork from './EditProfileWork';
import {
  selectors,
  actions
} from '../../../store/worker';

export const mapStateToProps = (state) => {

  let workerSelector = selectors(state);

  return {
    data_user: workerSelector.getWorker(),
    status_user: workerSelector.getFetchStatus()
  };
};
export default connect(
  mapStateToProps,
  {
    fetchUser: actions.workerFetch
  }
)(EditProfileWork);
