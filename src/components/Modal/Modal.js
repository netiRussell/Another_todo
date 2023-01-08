import ContentDelete from "./ContentDelete";
import ContentChange from "./ContentChange";

function Modal({ modalDelete, setModalState, actionData, setTodoArray, todoArray }) {
  return (
    <div className="modal">
      {modalDelete === true ? <ContentDelete setTodoArray={setTodoArray} actionData={actionData} setModalState={setModalState} /> : <ContentChange todoArray={todoArray} actionData={actionData} setModalState={setModalState} />}
    </div>
  );
}

export default Modal;
