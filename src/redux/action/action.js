import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userDeleted = () => ({
  type: types.DELETE_USER,
});
const userAdd = () => ({
  type: types.ADD_USER,
});
const userUpadate = () => ({
  type: types.UPDATE_USER,
});
const singalUser = (user) => ({
  type: types.GET_SINGAL_USER,
  payload: user,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};
export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log("res", res);
        dispatch(userAdd());
        // dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const getSingalUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(singalUser(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`,user)
      .then((res) => {
        console.log("res", res);
        dispatch(userUpadate());
      })
      .catch((err) => console.log(err));
  };
};
