import React, { useEffect, useReducer, useState } from 'react';
import './Example2.css';

const initialState = {
  userdata: [],
  haserror: false,
  isloding: false,
};

const baseurl = "https://jsonplaceholder.typicode.com/users";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isloding: action.payload,
      };
    case "ADDING_DATA":
      return {
        ...state,
        userdata: action.payload,
        haserror: false,
        isloding: false,
      };
    case "DELETION":
      return {
        ...state,
        userdata: state.userdata.filter((eachObj) => eachObj.id !== action.payload),
      };
    case "ERROR":
      return {
        ...state,
        haserror: action.payload,
        isloding: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        userdata: state.userdata.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

const Example2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingUser, setEditingUser] = useState(null);

  const gettingDataFromApi = async (url) => {
    dispatch({
      type: "LOADING",
      payload: true,
    });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network error.......");
      }
      const data = await response.json();
      console.log(data);
      dispatch({ type: "ADDING_DATA", payload: data });
      dispatch({ type: "ERROR", payload: false });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  const handleDeletionOfUsers = (id) => {
    dispatch({
      type: "DELETION",
      payload: id,
    });
  };

  const handleEditOfUsers = (userToEdit) => {
    setEditingUser(userToEdit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  const handleSaveClick = () => {
    dispatch({
      type: "UPDATE_USER",
      payload: editingUser,
    });
    setEditingUser(null);
  };

  useEffect(() => {
    gettingDataFromApi(baseurl);
  }, []);

  return (
    <div className='card'>
      {state.isloding && <h1>Loading....</h1>}
      {state.haserror && <h1>{state.haserror}</h1>}
      {!state.isloding && !state.haserror && state.userdata.map((eachObj) => {
        const { name, username, id, phone, website } = eachObj;
        return (
          <div key={id}>
            {editingUser && editingUser.id === id ? (
              <EditingUserData
                user={editingUser}
                handleChange={handleChange}
                handleSaveClick={handleSaveClick}
              />
            ) : (
              <>
                <h5>{name}</h5>
                <p>{username}</p>
                <p>{phone}</p>
                <p>{website}</p>
                <button onClick={() => handleDeletionOfUsers(id)}>Delete</button>
                <button onClick={() => handleEditOfUsers(eachObj)}>Edit</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

const EditingUserData = ({ user, handleChange, handleSaveClick }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="website"
        value={user.website}
        onChange={handleChange}
      />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default Example2;
