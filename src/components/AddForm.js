import { useState } from "react";

function AddForm() {
  const [title, setTitle] = useState("");

  const addNewTodo = function (event) {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <div className="form_title">
          <label>Add new todo: </label>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit" className="buttton">
            OK
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
