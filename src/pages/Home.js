import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Loader } from "../components/Loader";
import { Notes } from "../components/Notes";
import { FireBaseContext } from "../context/fireBase/fireBaseContext";

export const Home = () => {
  const { loading, notes, fetchNote, removeNote } = useContext(FireBaseContext);

  useEffect(() => {
    fetchNote();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Form />

      <hr />

      {loading ? <Loader /> : <Notes onRemove={removeNote} notes={notes} />}
    </Fragment>
  );
};
