import { useState } from "react";

function Todo({ text }) {
  const [modalState, setModalState] = useState(text);

  const deleteHandler = function () {
    console.log("Clicked");
  };

  const changeTitle = function () {
    setModalState();
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <button className="buttton" onClick={deleteHandler}>
        Change title
      </button>
      <button className="buttton" onClick={changeTitle}>
        Delete
      </button>
    </div>
  );
}

export { Todo };
