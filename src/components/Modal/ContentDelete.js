import React, { useContext } from "react";
import ModalProps from "../../store/modal-props";

function ContentDelete() {
  const ctx = useContext(ModalProps);

  const deleteTodo = function (event) {
    event.preventDefault();

    ctx.setTodoArray((prevData) => {
      return prevData.filter((value) => +value.id !== +ctx.actionData);
    });

    ctx.setModalState(false);
  };

  return (
    <React.Fragment>
      <p>Are you sure?</p>
      <form className="buttons" onSubmit={deleteTodo}>
        <button type="submit" className="buttton">
          Confirmed
        </button>
        <button
          type="button"
          className="buttton"
          onClick={function () {
            ctx.setModalState(false);
          }}
        >
          Actually... No
        </button>
      </form>
    </React.Fragment>
  );
}

export default ContentDelete;
