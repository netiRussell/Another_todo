import React from "react";
import { Todo } from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <React.Fragment>
      <h1 className="title">My todos</h1>
      <div className="wrapper">
        <Todo text="Learn React" />
        <Todo text="Learn NextJS" />
        <Todo text="Practice NextJS" />
      </div>

      <Modal />
      <Backdrop />
    </React.Fragment>
  );
}

export default App;
