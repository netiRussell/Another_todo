/*
  modalToggle:
  true - delete type
  false - change title type
*/

function Todo({ text, year, modalToggle }) {
  const changeHandler = function () {
    modalToggle(false);
  };

  const deleteHandler = function () {
    modalToggle(true);
  };

  return (
    <li className="card">
      <h2>
        {text} ({year})
      </h2>
      <button className="buttton" onClick={changeHandler}>
        Change title
      </button>
      <button className="buttton" onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
}

export { Todo };
