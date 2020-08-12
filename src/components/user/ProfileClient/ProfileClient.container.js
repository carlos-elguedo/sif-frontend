import { connect } from 'react-redux';
import ProfileClient from './ProfileClient';
import { selectors, actions } from '../../../store/client';
import {
  selectors as selectorsCategories,
  actions as actionsCategories
} from '../../../store/categories';

export const mapStateToProps = state => {
  let clientelector = selectors(state);
  let categoriesSelector = selectorsCategories(state);

  return {
    data: clientelector.getClient(),
    status: clientelector.getFetchStatus(),
    data_categories: categoriesSelector.getCategories(),
    status_categories: categoriesSelector.getFetchStatus()
  };
};
export default connect(mapStateToProps, {
  fetchClient: actions.clientFetch,
  fetchCategories: actionsCategories.categoriesFetch
})(ProfileClient);
