import { connect } from 'react-redux';
import Client from './Client';
import { selectors, actions } from '../../store/client';

export const mapStateToProps = state => {
  let clientSelector = selectors(state);

  return {
    data: clientSelector.getClient(),
    status: clientSelector.getFetchStatus()
  };
};
export default connect(mapStateToProps, {
  fetchClient: actions.clientFetch
})(Client);
