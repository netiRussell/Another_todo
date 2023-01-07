import React from "react";
import { useState } from "react";

function ContentChange({ setModalState, setTodoArray, actionData }) {
  const [newTitle, setNewTitle] = useState("");

  const submitForm = function (event) {
    event.preventDefault();
    // setTodoArray((prevData) => {
    //   return prevData.filter((value) => +value.id !== +actionData);
    // });

    setModalState(false);
  };

  return (
    <React.Fragment>
      <div className="buttons">
        <form onSubmit={submitForm}>
          <div className="form_title">
            <label>Please, provide title:</label>
            <input
              type="text"
              value={newTitle}
              onChange={(event) => {
                setNewTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className="buttton">
              OK
            </button>

            <button
              type="button"
              className="buttton"
              onClick={function () {
                setModalState(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ContentChange;
