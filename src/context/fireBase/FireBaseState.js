import axios from "axios";
import React, { useReducer } from "react";
import { ADD_NOTE, FETCH_NOTE, REMOVE_NOTE, SHOW_LOADER } from "../types";
import { FireBaseContext } from "./fireBaseContext";
import { fireBaseReducer } from "./fireBaseReducer";

const url = 'https://react-hooks-5b6a1-default-rtdb.firebaseio.com'

export const FireBaseState = ({ children }) => {
  const intialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(fireBaseReducer, intialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNote = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);

    const  payload = Object.keys(res.data).map(key => {
        return {
            ...res.data[key],
            id: key
        }
    })

    dispatch({
        type:FETCH_NOTE,
        payload
    })

    console.log("fetchNotes", res.data);
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };
    try {
      const res = await axios.post(`${url}/notes.json`, note);
      const payload = {
          ...note,
          id: res.data.name
      }

      dispatch({
          type:ADD_NOTE,
          payload
      })
      console.log("addNote", res.data);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });

    
  };

  return (
    <FireBaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNote,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
};
