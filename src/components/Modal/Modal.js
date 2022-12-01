import ContentDelete from "./ContentDelete";
import ContentChange from "./ContentChange";

function Modal({ modalDelete, modalToggle }) {
  return <div className="modal">{modalDelete === true ? <ContentDelete modalToggle={modalToggle} /> : <ContentChange modalToggle={modalToggle} />}</div>;
}

export default Modal;
