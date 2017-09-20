import {connect} from 'react-redux';
import SomeComponent from '../../components/some_component';

import {someAction} from './actions';

const mapStateToProps = (state) => {
  return {
    someData: state.someData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actOnData: (data) => {
      dispatch(someAction(data));
    }
  }
};

const SomeComponentContainer = connect(mapStateToProps, mapDispatchToProps)(SomeComponent);

export default SomeComponentContainer;
