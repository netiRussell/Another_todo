import { useState } from "react";

function AddForm({ setTodoArray }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  const addNewTodo = function (event) {
    event.preventDefault();

    setTodoArray((prevData) => {
      return [
        {
          title: title,
          year: year,
        },
        ...prevData,
      ];
    });
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
        <div>
          <button type="submit" className="buttton">
            Add new todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
