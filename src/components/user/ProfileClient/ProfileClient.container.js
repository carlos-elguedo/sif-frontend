import { connect } from 'react-redux';
import ProfileClient from './ProfileClient';
import { selectors, actions } from '../../../store/client';

export const mapStateToProps = state => {
  let clientelector = selectors(state);

  return {
    user_name: 'MLI',
    data: clientelector.getClient(),
    status: clientelector.getFetchStatus()
  };
};
export default connect(mapStateToProps, {
  fetchClient: actions.clientFetch
})(ProfileClient);
