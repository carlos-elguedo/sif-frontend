import { connect } from 'react-redux';

import EditProfileWork from './EditProfileWork';
import {
  selectors as selectorsWorker,
  actions as actionsWorker
} from '../../../store/worker';

import {
  selectors as selectorsProfessions,
  actions as actionsProfessions
} from '../../../store/professions';

import {
  selectors as selectorsCategories,
  actions as actionsCategories
} from '../../../store/categories';

export const mapStateToProps = (state) => {

  let workerSelector = selectorsWorker(state);

  let professionSelector = selectorsProfessions(state);

  let categoriesSelector = selectorsCategories(state);

  return {
    data_user: workerSelector.getWorker(),
    status_user: workerSelector.getFetchStatus(),

    data_professions: professionSelector.getProfessions(),
    status_professions: professionSelector.getFetchStatus(),

    data_categories: categoriesSelector.getCategories(),
    status_categories: categoriesSelector.getFetchStatus()

  };
};
export default connect(
  mapStateToProps,
  {
    fetchUser: actionsWorker.workerFetch,
    fetchProfessions: actionsProfessions.professionsFecth,
    fetchCategories: actionsCategories.categoriesFetch
  }
)(EditProfileWork);
