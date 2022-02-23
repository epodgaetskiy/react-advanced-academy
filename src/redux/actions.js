import { FETCH_USERS_SUCCESS, FETCH_USES_LOADING } from './constants';

export const setFirstnameActionCreator = (firstname) => ({
  type: "SET_FIRSTNAME",
  payload: firstname
});

export const fetchUsersSuccessActionCreator = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
})

export const fetchUsersLoadingActionCreator = () => ({
  type: FETCH_USES_LOADING
})

export const  fetchUsers = async (dispatch) => {
  dispatch(fetchUsersLoadingActionCreator())
  const response = await fetch("https://randomuser.me/api/?results=20");
  const users = await response.json();
  dispatch(fetchUsersSuccessActionCreator(users.results));
}
