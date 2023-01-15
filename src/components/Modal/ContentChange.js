import React, { useState, useContext } from "react";
import ModalProps from "../../store/modal-props";

function ContentChange() {
  const ctx = useContext(ModalProps);
  const [newTitle, setNewTitle] = useState("");

  const submitForm = function (event) {
    event.preventDefault();

    for (let i = 0; i < ctx.todoArray.length; i++) {
      if (+ctx.todoArray[i].id === +ctx.actionData) {
        ctx.todoArray[i].title = newTitle;
        setNewTitle("");
        break;
      }
    }

    ctx.setModalState(false);
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
                ctx.setModalState(false);
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
