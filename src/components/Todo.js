/*
  modalToggle:
  true - delete type
  false - change title type
*/

function Todo({ text, modalToggle }) {
  const changeHandler = function () {
    modalToggle(false);
  };

  const deleteHandler = function () {
    modalToggle(true);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <button className="buttton" onClick={changeHandler}>
        Change title
      </button>
      <button className="buttton" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

export { Todo };
