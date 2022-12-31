import { useState } from "react";
import StyledButton from "../General/Button";

function AddForm({ toggleAddForm, setTodoArray }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [isValid, setIsValid] = useState(true);

  const addNewTodo = function (event) {
    event.preventDefault();
    if (title.trim().length === 0) {
      setIsValid(false);
      return;
    }

    setTodoArray((prevData) => {
      return [
        {
          title: title,
          year: +year,
        },
        ...prevData,
      ].sort((a, b) => a.year - b.year);
    });

    toggleAddForm();
  };

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <div className={"form_title"}>
          <section className={isValid ? "" : "invalid_title"}>
            <label>Title : </label>
            <input
              type="text"
              value={title}
              onChange={(event) => {
                if (event.target.value.trim().length > 0) {
                  setIsValid(true);
                }
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
          <StyledButton type="button" onClick={toggleAddForm}>
            Cancel
          </StyledButton>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
