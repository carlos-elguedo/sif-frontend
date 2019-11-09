import { connect } from 'react-redux';

import ProfileWork from './ProfileWork';
import {
  selectors,
  actions
} from '../../../store/worker';

export const mapStateToProps = (state) => {

  let workerSelector = selectors(state);

  return {
    user_name: '11',
    user_work: '22',
    user_work_category: '33',
    data: workerSelector.getWorker(),
    status: workerSelector.getFetchStatus()
  };
};
export default connect(
  mapStateToProps,
  {
    fetchWorker: actions.workerFetch
  }
)(ProfileWork);
