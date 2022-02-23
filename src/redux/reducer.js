import { FETCH_USERS_SUCCESS, FETCH_USES_LOADING } from './constants';

const INITIAL_STATE = {
  firstname: "old",
  users: {
    isLoading: true,
    data: []
  }
};

export const reducer = (state = INITIAL_STATE, action) => {
  console.log(action.type, state, action.payload)
  switch (action.type) {
    case "SET_FIRSTNAME":
      return {
        ...state,
        firstname: action.payload
      };
    case FETCH_USES_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: true,
        }
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: {
          isLoading: false,
          data: action.payload
        }
      };
    default:
      return state;
  }
};
