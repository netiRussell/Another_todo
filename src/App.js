import React from "react";
import { useState } from "react";
import { Todo } from "./components/Todo";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Modal/Backdrop";
import Filter from "./components/Filter";
import AddForm from "./components/AddForm";

function App() {
  const DUMMY_DATA = [
    {
      title: "Change smth",
      year: 2021,
    },

    {
      title: "Learn React JS",
      year: 2021,
    },

    {
      title: "Remember JS",
      year: 2022,
    },

    {
      title: "Learn Next JS",
      year: 2023,
    },
  ];

  const [modalStatus, setModalState] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [todoArray, setTodoArray] = useState(DUMMY_DATA);

  const modalToggle = function (type) {
    /*
      modalToggle(type argument):
      true - delete type
      false - change title type
    */
    setModalState(!modalStatus);
    setModalDelete(type);
  };

  return (
    <React.Fragment>
      <div className="content">
        <header>
          <h1 className="title">My todos</h1>
          <AddForm setTodoArray={setTodoArray} />
          <Filter />
        </header>
        <div className="wrapper">
          {todoArray.map(function (value, index) {
            return <Todo modalToggle={modalToggle} text={value.title} year={value.year} key={index} />;
          })}
        </div>
      </div>

      <div className={modalStatus ? null : "hidden"} id="changeFunctionality">
        <Modal modalToggle={modalToggle} modalDelete={modalDelete} />
        <Backdrop modalToggle={modalToggle} />
      </div>
    </React.Fragment>
  );
}

export default App;
