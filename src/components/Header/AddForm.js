import { useState, useRef } from "react";
import StyledButton from "../General/StyledButton";
import CSSModuleButton from "../General/CSSModuleButton";

function AddForm({ toggleAddForm, setTodoArray }) {
  const titleInputRef = useRef();
  const yearInputRef = useRef();

  const [titleIsValid, setTitleIsValid] = useState(true);
  const [yearIsValid, setYearIsValid] = useState(true);

  const addNewTodo = function (event) {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const year = yearInputRef.current.value;

    if (title.trim().length === 0) {
      setTitleIsValid(false);

      if (isNaN(year) || year.toString().trim().length !== 4) {
        setYearIsValid(false);
      }
    } else if (isNaN(year) || year.toString().trim().length !== 4) {
      setYearIsValid(false);
    } else {
      setTodoArray((prevData) => {
        return [
          {
            title: title,
            year: +year,
            id: Math.random() * 100, // ! Has to be changed since it's not 100% unique
          },
          ...prevData,
        ].sort((a, b) => a.year - b.year);
      });

      toggleAddForm();
    }
  };

  return (
    <div>
      <form onSubmit={addNewTodo}>
        <div className={"form_title"}>
          <section className={titleIsValid ? "" : "invalid_section"}>
            <label>Title : </label>
            <input
              type="text"
              ref={titleInputRef}
              onChange={(event) => {
                if (event.target.value.trim().length > 0) {
                  setTitleIsValid(true);
                }
              }}
            />
          </section>

          <section className={yearIsValid ? "" : "invalid_section"}>
            <label>Year : </label>
            <input
              type="text"
              ref={yearInputRef}
              onChange={(event) => {
                if (!isNaN(yearIsValid)) {
                  setYearIsValid(true);
                }
              }}
            />
          </section>
        </div>
        <div className="row">
          <CSSModuleButton type="submit" onClick={null} content="Confirm" />
          <StyledButton type="button" onClick={toggleAddForm}>
            Cancel
          </StyledButton>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
