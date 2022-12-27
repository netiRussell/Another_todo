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
  const [filterYear, setFilterYear] = useState("none");
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

  const filteredData = todoArray.filter(function (value, index) {
    return value.year.toString() === filterYear.toString() || filterYear.toString().toLowerCase() === "none";
  });

  console.log(filteredData);

  return (
    <React.Fragment>
      <div className="content">
        <header>
          <h1 className="title">My todos</h1>
          <AddForm setTodoArray={setTodoArray} />
          <Filter setFilterYear={setFilterYear} />
        </header>
        <div className="wrapper">
          {filteredData.length > 0 ? (
            filteredData.map(function (value, index) {
              return <Todo modalToggle={modalToggle} text={value.title} year={value.year} key={index} />;
            })
          ) : (
            <h3 className="text_center">No todos provided yet</h3>
          )}
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
