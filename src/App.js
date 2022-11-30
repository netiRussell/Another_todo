import React from "react";
import { Todo } from "./components/Todo";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Modal/Backdrop";

function App() {
  return (
    <React.Fragment>
      <h1 className="title">My todos</h1>
      <div className="wrapper">
        <Todo text="Learn React" />
        <Todo text="Learn NextJS" />
        <Todo text="Practice NextJS" />
      </div>

      <Modal type="" />
      <Backdrop />
    </React.Fragment>
  );
}

export default App;
