import React from "react";
import { useState } from "react";
import { Todo } from "./components/Todo";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Modal/Backdrop";

function App() {
  const [modalStatus, setModalState] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

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
      <h1 className="title">My todos</h1>
      <div className="wrapper">
        <Todo modalToggle={modalToggle} text="Learn React" />
        <Todo modalToggle={modalToggle} text="Learn NextJS" />
        <Todo modalToggle={modalToggle} text="Practice NextJS" />
      </div>

      <div className={modalStatus ? null : "hidden"} id="changeFunctionality">
        <Modal modalToggle={modalToggle} modalDelete={modalDelete} />
        <Backdrop modalToggle={modalToggle} />
      </div>
    </React.Fragment>
  );
}

export default App;
