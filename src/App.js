import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Modal/Backdrop";
import Filter from "./components/Header/Filter";
import AddForm from "./components/Header/AddForm";
import TodoList from "./components/Content/TodoList";
import Chart from "./components/Chart/Chart";

function App() {
  const DUMMY_DATA = [
    {
      title: "Change smth",
      year: 2021,
      id: 1,
    },

    {
      title: "Learn React JS",
      year: 2021,
      id: 2,
    },

    {
      title: "Remember JS",
      year: 2022,
      id: 3,
    },

    {
      title: "test",
      year: 2016,
      id: 4,
    },

    {
      title: "Learn Next JS",
      year: 2023,
      id: 5,
    },
  ];

  // States
  const [modalStatus, setModalState] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [addFormStatus, setAddFormStatus] = useState(false);
  const [filterYear, setFilterYear] = useState("none");
  const [todoArray, setTodoArray] = useState([...DUMMY_DATA].sort((a, b) => a.year - b.year));
  const [actionData, setActionData] = useState();

  // Data for the chart
  const dataPoints = [];
  todoArray.forEach((value) => {
    for (let i = 0; i < dataPoints.length; i++) {
      if (dataPoints[i]?.year === value.year) {
        dataPoints[i].value++;
        return;
      }
    }
    dataPoints.push({ value: 1, year: value.year });
  });
  dataPoints.sort((a, b) => a.year - b.year);

  const modalToggle = function (type, actionData) {
    setModalState(!modalStatus);
    setActionData(actionData);

    /*
      modalToggle(type argument):
      true - delete type
      false - change title type
    */
    setModalDelete(type);
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
          <Filter setFilterYear={setFilterYear} dataPoints={dataPoints} />
        </header>

        <Chart dataPoints={dataPoints} />

        <ul className="wrapper">
          <TodoList modalToggle={modalToggle} todoArray={todoArray} filterYear={filterYear}></TodoList>
        </ul>
      </div>

      {ReactDOM.createPortal(
        <div className={`w-modal ${modalStatus ? null : "hidden"}`} id="changeFunctionality">
          <Modal actionData={actionData} todoArray={todoArray} setTodoArray={setTodoArray} setModalState={setModalState} modalDelete={modalDelete} />
          <Backdrop setModalState={setModalState} />
        </div>,
        document.querySelector("body")
      )}
    </React.Fragment>
  );
}

export default App;
