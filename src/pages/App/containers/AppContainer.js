import { connect } from 'react-redux';
import App from '../components/App';

import { fetchGit } from '../modules/actions';

export default connect(
  ({ app, initval }) => ({ ...app, ...initval }),
  (dispatch) => ({
    fetchGit: (keyword) => dispatch(fetchGit(keyword)),
  }),
)(App);
