import * as actions from '../actions/actions'

const initState = {
  checkJoin: [],
  loading: false,
}

const checkJoin = (state = initState, action) => {
  if (action.type === actions.get_check_join_success) {
    console.log(action.data)
    return {
      ...state,
      checkJoin: action.data.id
    }
  }
  return state;
}

export default checkJoin;