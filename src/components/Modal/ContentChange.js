import React from "react";
import { useState } from "react";

function ContentChange({ modalToggle, sendInfo }) {
  const [newTitle, setNewTitle] = useState("");

  const changeTitle = function (event) {
    setNewTitle(event.target.value);
  };

  const submitForm = function (event) {
    event.preventDefault();
    sendInfo(newTitle);
  };

  return (
    <React.Fragment>
      <div className="buttons">
        <form onSubmit={submitForm}>
          <div className="form_title">
            <label>Please, provide title:</label>
            <input type="text" onChange={changeTitle} />
          </div>
          <div>
            <button type="submit" className="buttton" onClick={modalToggle}>
              OK
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ContentChange;
