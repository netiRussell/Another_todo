import React from "react";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Modal/Backdrop";
import Filter from "./components/Filter";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

function App() {
  const DUMMY_DATA = [
    {
      title: "Change smth",
      year: "2021",
    },

    {
      title: "Learn React JS",
      year: "2021",
    },

    {
      title: "Remember JS",
      year: "2022",
    },

    {
      title: "Learn Next JS",
      year: "2023",
    },
  ];

  // States
  const [modalStatus, setModalState] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [addFormStatus, setAddFormStatus] = useState(false);
  const [filterYear, setFilterYear] = useState("none");
  const [todoArray, setTodoArray] = useState(DUMMY_DATA);

  const modalToggle = function (type) {
    setModalState(!modalStatus);
    setModalDelete(type);
    /*
      modalToggle(type argument):
      true - delete type
      false - change title type
    */
  };

  const toggleAddForm = function () {
    setAddFormStatus(!addFormStatus);
  };

  return (
    <React.Fragment>
      <div className="content">
        <header>
          <h1 className="title">My todos</h1>
          {addFormStatus ? (
            <AddForm toggleAddForm={toggleAddForm} setTodoArray={setTodoArray} />
          ) : (
            <div className="container">
              <button className="buttton" onClick={toggleAddForm}>
                Add a new todo
              </button>
            </div>
          )}
          <Filter setFilterYear={setFilterYear} />
        </header>
        <ul className="wrapper">
          <TodoList modalToggle={modalToggle} todoArray={todoArray} filterYear={filterYear}></TodoList>
        </ul>
      </div>

      <div className={modalStatus ? null : "hidden"} id="changeFunctionality">
        <Modal modalToggle={modalToggle} modalDelete={modalDelete} />
        <Backdrop modalToggle={modalToggle} />
      </div>
    </React.Fragment>
  );
}

export default App;
