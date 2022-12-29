import { useState } from "react";

function AddForm({ toggleAddForm, setTodoArray }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  const addNewTodo = function (event) {
    event.preventDefault();

    setTodoArray((prevData) => {
      return [
        {
          title: title,
          year: +year,
        },
        ...prevData,
      ];
    });

    toggleAddForm();
  };

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <div className="form_title">
          <section>
            <label>Title : </label>
            <input
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </section>

          <section>
            <label>Year : </label>
            <input
              type="text"
              value={year}
              onChange={(event) => {
                setYear(event.target.value);
              }}
            />
          </section>
        </div>
        <div className="row">
          <button type="submit" className="buttton">
            Confirm
          </button>
          <button type="button" className="buttton" onClick={toggleAddForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
