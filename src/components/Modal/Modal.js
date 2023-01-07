import ContentDelete from "./ContentDelete";
import ContentChange from "./ContentChange";

function Modal({ modalDelete, setModalState, actionData, setTodoArray }) {
  return (
    <div className="modal">
      {modalDelete === true ? <ContentDelete setTodoArray={setTodoArray} actionData={actionData} setModalState={setModalState} /> : <ContentChange setTodoArray={setTodoArray} actionData={actionData} setModalState={setModalState} />}
    </div>
  );
}

export default Modal;
