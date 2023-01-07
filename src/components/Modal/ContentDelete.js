import React from "react";

function ContentDelete({ setModalState, actionData, setTodoArray }) {
  const deleteTodo = function (event) {
    event.preventDefault();

    setTodoArray((prevData) => {
      return prevData.filter((value) => +value.id !== +actionData);
    });

    setModalState(false);
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
            setModalState(false);
          }}
        >
          Actually... No
        </button>
      </form>
    </React.Fragment>
  );
}

export default ContentDelete;
