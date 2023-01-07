/*
  modalToggle:
  true - delete type
  false - change title type
*/

function Todo({ text, year, modalToggle, id }) {
  const changeHandler = function (event) {
    modalToggle(false, event.target.id);
  };

  const deleteHandler = function (event) {
    modalToggle(true, event.target.id);
  };

  return (
    <li className="card">
      <h2>
        {text} ({year})
      </h2>
      <button className="buttton" id={id} onClick={changeHandler}>
        Change title
      </button>
      <button className="buttton" id={id} onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
}

export { Todo };
