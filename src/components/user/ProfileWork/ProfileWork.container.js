import { connect } from 'react-redux';

import ProfileWork from './ProfileWork';
import { selectors, actions } from '../../../store/worker';

export const mapStateToProps = state => {
  let workerSelector = selectors(state);

  return {
    data: workerSelector.getWorker(),
    status: workerSelector.getFetchStatus()
  };
};
export default connect(mapStateToProps, {
  fetchWorker: actions.workerFetch
})(ProfileWork);
