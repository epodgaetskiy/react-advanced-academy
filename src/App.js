import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstnameActionCreator,
  fetchUsers
} from './redux/actions';

const FieldFirstName = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        name="firstname"
        value={state.firstname}
        onChange={(event) => {
          const firstname = event.target.value;
          dispatch(setFirstnameActionCreator(firstname));
        }}
      />
    </div>
  );
};

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

  if (users.isLoading) {
    return <div>...loading</div>
  }

  return (
    <div>
      <p>Users:</p>
      {users.data.map((user) => (
          <div key={user.id.value || user.email}>{user.email}</div>
        )
      )}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Users />
      <FieldFirstName />
    </div>
  );
};

export default App;
